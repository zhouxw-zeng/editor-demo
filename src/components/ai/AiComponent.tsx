import { SquareChevronRight } from "lucide-react"

interface AiComponent {
  onClick: (isEnabled: boolean) => void;
}
import "./ai.css"
const AiComponent = ({onClick}: AiComponent) => {
  return (
    <div className="min-w-fit ai-heihgt border-l-2 shadow-sm flex flex-col">
      <div className="h-12 flex justify-between items-center">
        <div className="flex-1">这是标题</div>
        {/* <SquareChevronRight className="h-2 w-2 p-2 custom-icon-color" /> */}
        {/* 临时关闭 */}
        <div className="cursor-pointer" onClick={() => onClick(false)}>
          关闭
        </div>
      </div>
    </div>
  )
}
export default AiComponent