import React from 'react';
import { Button } from '@/components/ui/button';
import Magic from "@/components/ui/magic"

interface MyComponentProps {
  onClick: (e: boolean) => void // 通用的函数类型
}

/**
 * AI 开启组件
 */
const AiSwitch = ({ onClick }: MyComponentProps) => {
  return (
      <div
        className="fixed top-6 right-1/3 z-20 cursor-pointer bg-transparent border-none"
        aria-label="开启 AI 功能"
      >
        <Button
          className="gap-1 rounded-xl text-green-500 hover:text-cyan-300"
          variant="ghost"
          onClick={() => onClick(true)}
          aria-label="开启 AI 功能"
          size="sm"
        >
          <Magic className="h-5 w-5" />
          Open AI
        </Button>
      </div>
  )
}

export default AiSwitch