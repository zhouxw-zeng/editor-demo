import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SearchDialog from "./components/SearchDialog"
import SearchButton from "./components/SearchButton"
import CheckTheme from "./components/CheckTheme"
import AvatarTools from "./components/AvatarTools"
import { useEffect, useState } from "react"

/**
 * 右上角 搜索 / 用户 / 主体切换
 */
const UserTools = () => {
  const [ avatarSrc, setAvatarSrc ] = useState("https://github.com/shadcn.png")
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const onSearch = () => {
    setSearchOpen(true)
  }
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-2.5">
      {/* 功能搜索 */}
      <SearchDialog open={searchOpen} oenChange={(e) => setSearchOpen(e)}>
        <SearchButton onClick={onSearch} />
      </SearchDialog>
      <div className="flex items-center justify-between cursor-pointer">
        {/* 主体切换 */}
        <CheckTheme></CheckTheme>
        {/* 头像及其个人信息 */}
        <AvatarTools>
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>登录</AvatarFallback>
          </Avatar>
        </AvatarTools>
      </div>
    </div>
  ) 
}

export default UserTools