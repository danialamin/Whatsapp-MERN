import Chat from "./Chat"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="grid place-items-center h-[100vh] bg-[#dadbd3]">
      <div className="flex background-[#ededed] mt-[-50px] h-[90vh] w-[90vw]">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App
