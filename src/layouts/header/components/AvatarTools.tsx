import { ReactNode, useEffect, lazy, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/layouts/header/components/popover";
import { Button } from "@/components/ui/button";
import useLocalStorage from "@/hooks/use-local-storage";

const AsyncUserInfo = lazy(() => import("@/components/user/UserInfo"))
const AsyncLoginWin = lazy(() => import("@/components/user/LoginWin"))

const AvatarTool = ({children} : { children: ReactNode }) => {
  const [userInfo, setUserInfo]  = useLocalStorage("userInfo", "")
  const [popContent, setPopContent] = useState(<AsyncUserInfo />)
  useEffect(() => {
    if (!userInfo) {
      setPopContent(<AsyncLoginWin />)
      return
    }

  }, [userInfo])
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-full p-2" align="end" >
        {
          popContent
        }
      </PopoverContent>
    </Popover>
  )
}
export default AvatarTool