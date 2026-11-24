// O @capacitor/cli 6 faz `require("tar").default.extract(...)`. O tar 7 (sem as falhas de segurança
// do tar 6) não tem export default; esta ponte acrescenta.
const tar = require("tar-corrigido");
module.exports = Object.assign({}, tar, { default: tar, __esModule: true });
