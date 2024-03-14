import { useEffect, useState } from "react";
import Chat from "./Chat"
import Sidebar from "./Sidebar"
import Pusher from "pusher-js"

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/messages/get", {
      method: 'GET'
    }).then((resp) => resp.json())
      .then(data => setMessages(data.message))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('5bbfae9311f2cbeaeb34', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className="grid place-items-center h-[100vh] bg-[#dadbd3]">
      <div className="flex background-[#ededed] mt-[-50px] h-[90vh] w-[90vw]">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
