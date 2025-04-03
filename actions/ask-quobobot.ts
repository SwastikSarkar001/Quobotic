'use server'

import { MessageType } from "@/types/types"
import { revalidatePath } from "next/cache"

const handleSubmit = async (formData: FormData) => {
  const input = formData.get("text") as string
  const chat: MessageType = {
    user: "you",
    dataType: "text",
    text: input,
    timestamp: new Date()
  }
  await Promise.resolve(setTimeout(() => {}, 2000))
  revalidatePath('/')
}

export default handleSubmit