"use client"
import { useEffect } from "react"

/**
 * 记录生活主页
 */
const myLiveHome = () => {
  useEffect(() => {
    console.log("欢迎观看日志记录")
  })
  return (
    <div>
      <h1>欢迎观看日志记录</h1>
    </div>
  )
}

export default myLiveHome