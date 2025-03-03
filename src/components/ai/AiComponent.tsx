import { Button } from "../ui/button";
import Magic from "@/components/ui/magic";
import Clipboard from "@/components/ui/clipboard";
interface AiComponent {
  onClick: (isEnabled: boolean) => void;
}
import "./ai.css"
const AiComponent = ({onClick}: AiComponent) => {
  return (
    <div>
      <div className="min-w-fit ai-heihgt border-l-2 shadow-sm flex flex-col">
      <div className="h-12 flex justify-between items-center">
        <div className="flex-1 cursor-pointer font-bold">
          <Clipboard copy={"这个是标题哇"} />
        </div>
        <Button
          className="gap-1 rounded-none text-green-500 hover:text-red-500"
          variant="ghost"
          onClick={() => onClick(false)}
          >
          <Magic className="w-10 h-10" />
          Off AI
        </Button>
      </div>
    </div>
    </div>
    
  )
}
export default AiComponent