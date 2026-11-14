package com.chicosl.breedingcompanion;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;

import androidx.activity.result.ActivityResult;
import androidx.core.content.FileProvider;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

/**
 * Backup da biblioteca: "save" abre o seletor do Android para escolher onde salvar o arquivo;
 * "share" abre o menu de compartilhar (Drive, WhatsApp, e-mail...).
 */
@CapacitorPlugin(name = "Arquivo")
public class ArquivoPlugin extends Plugin {

    @PluginMethod
    public void save(PluginCall call) {
        String name = call.getString("filename", "backup.json");
        String mime = call.getString("mimeType", "application/json");
        Intent it = new Intent(Intent.ACTION_CREATE_DOCUMENT);
        it.addCategory(Intent.CATEGORY_OPENABLE);
        it.setType(mime);
        it.putExtra(Intent.EXTRA_TITLE, name);
        startActivityForResult(call, it, "saveResult");
    }

    @ActivityCallback
    private void saveResult(PluginCall call, ActivityResult result) {
        if (call == null) return;
        JSObject ret = new JSObject();
        if (result.getResultCode() != Activity.RESULT_OK || result.getData() == null || result.getData().getData() == null) {
            ret.put("saved", false);
            call.resolve(ret);
            return;
        }
        Uri uri = result.getData().getData();
        try (OutputStream os = getContext().getContentResolver().openOutputStream(uri, "wt")) {
            os.write(call.getString("data", "").getBytes(StandardCharsets.UTF_8));
            ret.put("saved", true);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Falha ao salvar: " + e.getMessage());
        }
    }

    @PluginMethod
    public void share(PluginCall call) {
        String name = call.getString("filename", "backup.json").replaceAll("[^A-Za-z0-9._-]", "_");
        String mime = call.getString("mimeType", "application/json");
        try {
            File dir = new File(getContext().getCacheDir(), "compartilhar");
            dir.mkdirs();
            File f = new File(dir, name);
            try (OutputStream os = new FileOutputStream(f)) {
                os.write(call.getString("data", "").getBytes(StandardCharsets.UTF_8));
            }
            Uri uri = FileProvider.getUriForFile(getContext(), getContext().getPackageName() + ".fileprovider", f);
            Intent it = new Intent(Intent.ACTION_SEND);
            it.setType(mime);
            it.putExtra(Intent.EXTRA_STREAM, uri);
            it.putExtra(Intent.EXTRA_SUBJECT, name);
            it.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            Intent chooser = Intent.createChooser(it, "Salvar ou enviar o backup");
            chooser.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
            getActivity().startActivity(chooser);
            call.resolve();
        } catch (Exception e) {
            call.reject("Falha ao compartilhar: " + e.getMessage());
        }
    }
}
