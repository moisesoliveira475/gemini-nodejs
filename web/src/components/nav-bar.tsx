import { ComponentProps } from "react";

interface INavProps extends ComponentProps<'nav'> {

}

export function NavBar(props: INavProps) {
  return (
    <nav {...props}>

    </nav>
  )
}