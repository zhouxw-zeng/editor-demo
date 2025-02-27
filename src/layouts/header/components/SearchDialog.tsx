import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/**
 * 全局功能搜索Dialog
 * @param param
 * @returns 
 */
const SearchDialog = ( {open, oenChange, children }: { open: boolean, oenChange: (e: any) => void, children: ReactNode } ) => {
  return (
    <Dialog open={open} onOpenChange={oenChange}>
      <DialogTrigger>
        { children }
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>搜索笔记或AI日志?</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SearchDialog