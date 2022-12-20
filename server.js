const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const connectDB = require("./src/config/dbConnect");
const { logger } = require("./src/middleware/logger");
const errorHandler = require("./src/middleware/errorHandler");
const userRoutes = require("./src/routes/users/users.routes");
const tagRoutes = require("./src/routes/tags/tags.routes");
const conversationRoutes = require("./src/routes/conversations/conversations.routes");
const channelRoutes = require("./src/routes/groups/channels/channels.routes");
const groupRoutes = require("./src/routes/groups/groups.routes");
const messagesRoutes = require("./src/routes/messages/messages.routes");
const PORT = process.env.PORT || 5000;
const app = express();

// User Middlewares
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, "/src/public")));
mongoose.set("strictQuery", true);
connectDB();
colors.enable();

app.get("/", (req, res) => {
  res.send(
    "<h2 style='color:green;box-sizing:border-box; margin:0'>Server is Running!<h2>"
  );
});
// --------------------
// ---------------
// ----------
// -----
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tags", tagRoutes);
app.use("/api/v1/conversations", conversationRoutes);
app.use("/api/v1/groups", groupRoutes);
app.use("/api/v1/channels", channelRoutes);
app.use("/api/v1/messages", messagesRoutes);
// -----
// ----------
// ---------------
// --------------------
// Not Found Or 404 error Page
app.all("*", (req, res) => {
  //   res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "./src", "views", "not.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found!" });
  } else {
    res.type("txt".send("404 Not Found!"));
  }
});

// Handle Error
app.use(errorHandler);
// -----
// ----------
// ---------------
// -------------------

// Listen Application
mongoose.connection.once("open", () => {
  console.log(
    colors.green.underline(`📗Connected`),
    colors.yellow.underline("to Server!")
  );
  app.listen(PORT, () => console.log(`Server running in port no : ${PORT}`));
});
mongoose.connection.on("error", (err) => {
  console.log(colors.red("📕", err));
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
