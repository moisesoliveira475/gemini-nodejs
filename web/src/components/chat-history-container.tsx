import { ComponentProps } from "react";

interface IChatHistoryContainer extends ComponentProps<"div"> {
    
}

export function ChatHistoryContainer(props: IChatHistoryContainer) {
    return (
        <div {...props}>
            
        </div>
    )
}