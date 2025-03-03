import { useEffect, useState } from "react";
import { Button } from "./button";
import { Copy } from "lucide-react";
import { toast } from "sonner";


interface ClipboardProps {
  copy: string;
  isButton?: boolean
}
/**
 * 复制组件
 * @param param0 
 */
const Clipboard = ({copy, isButton = false}: ClipboardProps) => {
  // 复制内容到剪贴板
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copy); // 使用 Clipboard API
      toast.success("复制成功！");
    } catch (error) {
      console.error("复制失败:", error);
      toast.error("复制失败，请重试！");
    }
  };
  return isButton ? (

    <Button variant="ghost" className="gap-1 rounded-xl text-green-500 hover:text-cyan-300">
      <Copy size={16} />
      Copy
    </Button>
  ) : (
    <span
      onClick={handleCopy}
      className="cursor-pointer"
      title="点击复制"
      >
        {copy}
      </span>
  )
}
export default Clipboard