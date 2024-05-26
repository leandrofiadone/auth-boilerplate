import {useEffect} from "react"
// import {Box, Avatar, Typography, Button, IconButton} from "@mui/material"
// import red from "@mui/material/colors/red"
import {useAuth} from "../context/AuthContext"
// import ChatItem from "../components/chat/ChatItem"
// import {IoMdSend} from "react-icons/io"
import {useNavigate} from "react-router-dom"
// import {
//   deleteUserChats,
//   getUserChats,
//   sendChatRequest
// } from "../helpers/api-communicator"
// import toast from "react-hot-toast"

// type Message = {
//   role: "user" | "assistant"
//   content: string
// }
const Prueba = () => {
  const navigate = useNavigate()
//   const inputRef = useRef<HTMLInputElement | null>(null)
  const auth = useAuth()
//   const [chatMessages, setChatMessages] = useState<Message[]>([])
//   const handleSubmit = async () => {
//     const content = inputRef.current?.value as string
//     if (inputRef && inputRef.current) {
//       inputRef.current.value = ""
//     }
//     const newMessage: Message = {role: "user", content}
//     setChatMessages((prev) => [...prev, newMessage])
//     const chatData = await sendChatRequest(content)
//     setChatMessages([...chatData.chats])
//     //
//   }
//   const handleDeleteChats = async () => {
//     try {
//       toast.loading("Deleting Chats", {id: "deletechats"})
//       await deleteUserChats()
//       setChatMessages([])
//       toast.success("Deleted Chats Successfully", {id: "deletechats"})
//     } catch (error) {
//       console.log(error)
//       toast.error("Deleting chats failed", {id: "deletechats"})
//     }
//   }
//   useLayoutEffect(() => {
//     if (auth?.isLoggedIn && auth.user) {
//       toast.loading("Loading Chats", {id: "loadchats"})
//       getUserChats()
//         .then((data) => {
//           setChatMessages([...data.chats])
//           toast.success("Successfully loaded chats", {id: "loadchats"})
//         })
//         .catch((err) => {
//           console.log(err)
//           toast.error("Loading Failed", {id: "loadchats"})
//         })
//     }
//   }, [auth])


  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login")
    }
  }, [auth])
  return (
    <div>
      <p>Pruebaaaaaaa</p>
    </div>
  )
}

export default Prueba
