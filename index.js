const WebSocket = require("ws");

// Porta usada pelo Render automaticamente
const PORT = process.env.PORT || 443;

// Servidor WebSocket
const server = new WebSocket.Server({
    port: PORT
});

console.log("Servidor WSS iniciado na porta:", PORT);

// Evento: nova conexão
server.on("connection", (ws, req) => {
    console.log("Novo cliente conectado:", req.socket.remoteAddress);

    ws.on("message", (msg) => {
        // Redireciona tudo que o cliente enviar (modo eco)
        ws.send(msg);
    });

    ws.on("close", () => {
        console.log("Cliente desconectado");
    });
});
