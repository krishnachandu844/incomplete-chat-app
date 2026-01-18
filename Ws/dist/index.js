import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
const rooms = [];
wss.on("connection", function connection(ws) {
    ws.on("message", function message(data) {
        const ParsedData = JSON.parse(data);
        switch (ParsedData.type) {
            case "join":
                rooms.push({
                    socket: ws,
                    roomId: ParsedData.roomId,
                });
                break;
            case "chat":
                const room = rooms.filter((r) => r.roomId == ParsedData.roomId);
                room.map((r) => {
                    if (r.roomId == ParsedData.roomId && r.socket != ws) {
                        r.socket.send(ParsedData.message);
                    }
                });
                break;
            default:
                break;
        }
    });
});
//# sourceMappingURL=index.js.map