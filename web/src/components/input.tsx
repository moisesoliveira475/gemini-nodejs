import { ComponentProps } from "react"

interface IInputProps extends ComponentProps<'input'>{
  
}

export function Input(props: IInputProps) {
  return (
    <input type="text" {...props}/>
  )
}