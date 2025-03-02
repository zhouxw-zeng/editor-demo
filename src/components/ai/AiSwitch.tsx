import React from 'react';

interface MyComponentProps {
  onClick: (e: boolean) => void // 通用的函数类型
}

/**
 * AI 开启组件
 */
const AiSwitch = ({ onClick }: MyComponentProps) => {
  return (
      <div
        className="fixed top-8 right-1/3 z-20 cursor-pointer bg-transparent border-none"
        onClick={() => onClick(true)}
        aria-label="开启 AI 功能"
      >
        开启
      </div>
  )
}

export default AiSwitch