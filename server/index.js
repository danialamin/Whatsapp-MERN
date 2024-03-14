const cookieParser = require('cookie-parser')
const express = require('express')
const { default: mongoose } = require('mongoose')
const messageModel = require('./models/messageModel')
const dotenv = require('dotenv').config()
const Pusher = require("pusher");
const cors = require("cors")

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({origin: true, credentials: true}))

app.listen(3001, () => console.log('Listening to port 3001'))
mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log('Connected to mongodb'))

// changeStream
const db = mongoose.connection
db.once("open", () => {
  const msgCollection = db.collection("messages")
  const changeStream = msgCollection.watch()

  changeStream.on("change", (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument
      pusher.trigger('messages', 'inserted', 
        {
          name: messageDetails.user,
          message: messageDetails.message,
          timestamp: messageDetails.timestamp,
          received: messageDetails.received
        })
    } else {
      console.log('Error triggering Pusher')
    }
  })
})

app.post("/api/v1/messages/new", async (req, res) => {
  const newMessage = new messageModel({...req.body})
  try {
    await newMessage.save()
    res.status(201).json({'message': 'message created'})
  } catch {
    res.status(500).json({'message': 'error'})
  }
})

app.get("/messages/get", async (req, res) => {
  const messages = await messageModel.find()
  res.status(200).json({"message": messages})
})

// Pusher

const pusher = new Pusher({
  appId: "1771010",
  key: "5bbfae9311f2cbeaeb34",
  secret: "7a71ee1fd709f9398a2d",
  cluster: "ap2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});