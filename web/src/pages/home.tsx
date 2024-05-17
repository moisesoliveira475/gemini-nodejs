import { ChatContainer } from "../components/chat-container";
import { ChatsList } from "../components/chat-list";
import { Input } from "../components/input";

export function Home() {
    return (
        <div className="mx-auto flex flex-row">
            <ChatsList className="bg-zinc-900" />
            <ChatContainer className="bg-zinc-900">
                <Input className="" />
            </ChatContainer>
        </div>
    )
}