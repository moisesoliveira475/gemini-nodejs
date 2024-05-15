import { ChatContainer } from "./components/chat-container";
import { Input } from "./components/input";
import { NavBar } from "./components/nav-bar";

export function App() {
  return (
    <div className="mx-auto flex flex-row">
      <NavBar className="bg-zinc-900"/>
      <ChatContainer className="bg-zinc-900">
        <Input className=""/>
      </ChatContainer>
    </div>
  )
};