import { collection, getDocs } from "../../../firebase/node_modules/firebase/firestore";
import { ComponentProps, useEffect, useState } from "react";
import { db } from "../../../firebase/firebase"


interface INavProps extends ComponentProps<'nav'> {

}

interface IChat {

}

export function ChatsList(props: INavProps) {

  const [chats, setChats] = useState()

  useEffect(() => {
      async function handleGetChats() {
      const collectionRef = collection(db, "chats")
      const data = await getDocs(collectionRef)
      const docs = data.docs

      console.log(docs)

      return docs
    }

    handleGetChats()
    
  }, [])

  return (
    <nav {...props}>

    </nav>
  )
}