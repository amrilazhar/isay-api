// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();

// // IMPORT HERE
// const chatController = require("../controllers/chatController");
// const {startSocketChat , socketImageUpload} = require("../middlewares/sokcet/chat");

// let authDummy = (req, res, next) => {
//   let id = ["608ac628c8d0a1bfded19469", "608ac638c8d0a1bfded1946a", "608ac649c8d0a1bfded1946b"];
//   //
//   req.profile = { id: id[Math.floor(Math.random() * 2)] };
  
//   next();
// };

// // SET ROUTER HERE
// router.post("/joinRoom", authDummy, chatController.joinRoom, startSocketChat, socketImageUpload);
// router.get("/getMessageHistory/:chatRoom", authDummy, chatController.getMessageHistory);

// module.exports = router;