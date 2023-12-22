import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Server } from "socket.io";
import { DrawLine } from "types/types";

const app = express();

// Cors Options
const cors = {
  origin: process.env.FRONTEND_URL,
};

// Express Server
const expressServer = app.listen(process.env.PORT || 5000, () => {
  console.log("Server Is Listening ON Port: ", process.env.PORT);
});

// Socket Server with Cors
const io = new Server(expressServer, { cors });

io.on("connection", (socket) => {
  // Send Data On New Connection
  socket.on("client-ready", () => {
    socket.broadcast.emit("get-canvas-state");
  });

  socket.on("canvas-state", (state) => {
    console.log('Recieved The')
    socket.broadcast.emit("canvas-state-from-server", state);
  });

  // Draw
  socket.on("draw-line", ({ prevPoint, currentPoint, color }: DrawLine) => {
    socket.broadcast.emit("draw-line", { prevPoint, currentPoint, color });
  });

  // Clear
  socket.on("clear", () => io.emit("clear"));
});
