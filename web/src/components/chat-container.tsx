import { ComponentProps } from "react";

interface IChatContainer extends ComponentProps<'div'> {

}

export function ChatContainer(props: IChatContainer) {
  return (
    <div {...props}>
      
    </div>
  )
}