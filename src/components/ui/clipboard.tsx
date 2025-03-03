import { useState } from "react";
import { Button } from "./button";
import { Copy } from "lucide-react";
import clipboard from "clipboard";


interface ClipboardProps {
  copy: string;
  isButton?: boolean
}
/**
 * 复制组件
 * @param param0 
 */
const Clipboard = ({copy, isButton = false}: ClipboardProps) => {
  const [clipboardObj, setClipboardObj] = useState<any>(null)
  const copyRef: any = null
  // 鼠标按下触发
  const onInitCopy = (e: any) => {
    console.log("Copy Element DOM", e)
    setClipboardObj(new clipboard(e.target, {
      text: function () {
        return copy
      }
    }))
  }
  // 鼠标左键离开触发
  const onDestroyCopy = () => {
    if (clipboardObj !== null) {
      clipboardObj.destory()
      setClipboardObj(null)
    }
  }
  return (
    isButton ? <Button variant="ghost" className="gap-1 rounded-xl text-green-500 hover:text-cyan-300">
      <Copy />
      Copy
    </Button>
    :
    <span
      className="cursor-pointer"
      title="点击复制"
      ref={copyRef}
      onMouseEnter={onInitCopy}
      onMouseLeave={onDestroyCopy}
      >
        {copy}
      </span>
  )
}
export default Clipboard