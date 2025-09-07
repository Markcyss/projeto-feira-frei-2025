import { conection } from "./conection.js";

export async function vincularQrcode(nome, qrcode) {
    const comando = `
        update registro
        set qrCode = ?
        where nome = ?
    `
    const [registros] = await conection.query(comando, [qrcode,nome])
    return registros
}