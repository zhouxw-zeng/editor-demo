import { Button } from "@/components/ui/button"
import { useEffect } from "react"
// 搜索按钮
const SearchButton = ({onClick}: {onClick: () => void}) => {
  // 接听鼠标世界
  const handleKeydown = (event: any) => {
    if (event.ctrlKey && event.key === "k") {
      // 阻止默认行为；
      event.preventDefault();
      onClick()
      console.log("Ctrl + K pressed!");
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    // 在组件销毁时 关闭键盘监听
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [])
  return (
    <div className="flex ">
      <Button size="lg" variant="outline" asChild>
        <div className="text-center">
          Click using Search / Ctrl + K
        </div>
      </Button>
    </div>
  )
}

export default SearchButton