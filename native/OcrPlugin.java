package com.chicosl.breedingcompanion;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Rect;
import android.util.Base64;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.text.Text;
import com.google.mlkit.vision.text.TextRecognition;
import com.google.mlkit.vision.text.TextRecognizer;
import com.google.mlkit.vision.text.latin.TextRecognizerOptions;

/**
 * Leitura de texto no próprio aparelho (Google ML Kit, modelo latino embutido).
 * Recebe a imagem em base64 e devolve cada linha com sua posição na imagem.
 */
@CapacitorPlugin(name = "Ocr")
public class OcrPlugin extends Plugin {

    private static final int MAX_B64_CHARS = 28_000_000; // ~20 MB de imagem
    private static final int MAX_SIDE = 4096;

    @PluginMethod
    public void read(PluginCall call) {
        String b64 = call.getString("base64");
        if (b64 == null || b64.isEmpty()) { call.reject("sem imagem"); return; }
        int comma = b64.indexOf(',');
        if (b64.startsWith("data:") && comma > 0) b64 = b64.substring(comma + 1);

        // limite de tamanho: base64 de até ~20 MB e lado maior de até ~4096 px (evita falta de memória)
        if (b64.length() > MAX_B64_CHARS) { call.reject("imagem muito grande"); return; }
        final Bitmap bmp;
        try {
            byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
            BitmapFactory.Options bounds = new BitmapFactory.Options();
            bounds.inJustDecodeBounds = true;
            BitmapFactory.decodeByteArray(bytes, 0, bytes.length, bounds);
            if (bounds.outWidth <= 0 || bounds.outHeight <= 0) { call.reject("imagem inválida"); return; }
            int sample = 1;
            while (Math.max(bounds.outWidth, bounds.outHeight) / sample > MAX_SIDE) sample *= 2;
            BitmapFactory.Options opts = new BitmapFactory.Options();
            opts.inSampleSize = sample;
            bmp = BitmapFactory.decodeByteArray(bytes, 0, bytes.length, opts);
        } catch (OutOfMemoryError e) { call.reject("imagem muito grande"); return;
        } catch (Exception e) { call.reject("imagem inválida: " + e.getMessage()); return; }
        if (bmp == null) { call.reject("imagem inválida"); return; }

        final TextRecognizer rec = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);
        rec.process(InputImage.fromBitmap(bmp, 0))
            .addOnSuccessListener(text -> {
                JSObject ret = new JSObject();
                ret.put("text", text.getText());
                ret.put("width", bmp.getWidth());
                ret.put("height", bmp.getHeight());
                JSArray lines = new JSArray();
                for (Text.TextBlock block : text.getTextBlocks()) {
                    for (Text.Line line : block.getLines()) {
                        JSObject o = box(line.getText(), line.getBoundingBox());
                        JSArray els = new JSArray();
                        for (Text.Element el : line.getElements()) els.put(box(el.getText(), el.getBoundingBox()));
                        o.put("e", els);
                        lines.put(o);
                    }
                }
                ret.put("lines", lines);
                rec.close();
                call.resolve(ret);
            })
            .addOnFailureListener(e -> { rec.close(); call.reject("falha na leitura: " + e.getMessage()); });
    }

    private static JSObject box(String t, Rect r) {
        JSObject o = new JSObject();
        o.put("t", t);
        if (r != null) { o.put("x", r.left); o.put("y", r.top); o.put("w", r.width()); o.put("h", r.height()); }
        return o;
    }
}
