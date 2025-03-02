"use client"
import { lazy, ReactNode, useEffect } from "react"
import useLocalStorage from "@/hooks/use-local-storage"

// import AiComponent from "@/components/ai/AiComponent"
const AiComponent = lazy(() => import("@/components/ai/AiComponent"))
const AiSwitch = lazy(() => import("@/components/ai/AiSwitch"))

const  Main = ({children}: {children: ReactNode}) => {
  const [aiOpen, setAiOpen] = useLocalStorage<boolean>("aiOpenState", true)
  const openAiComponent = (openStatus: boolean) => {
    setAiOpen(openStatus)
  }
  useEffect(() => {
  }, [aiOpen])
  return (
    <div className={`${aiOpen ? 'grid grid-cols-[3fr_1fr] gap-2.5' : ''} box-content mt-16 main-height`}>
      { children }
      {
        aiOpen ? <AiComponent onClick={openAiComponent} /> : 
        <AiSwitch
          onClick={openAiComponent} 
        />
      }
    </div>
  )
}

export default Main