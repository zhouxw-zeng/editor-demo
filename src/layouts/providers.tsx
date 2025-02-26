"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { Toaster } from "sonner";
import useLocalStorage  from "@/hooks/use-local-storage";
import { type Dispatch, type SetStateAction, type ReactNode, createContext } from "react";
// 引入数据分析
import { Analytics } from "@vercel/analytics/next";
// 字体管理组件
export const AppContext = createContext<{
  font: string;
  setFont: Dispatch<SetStateAction<string>> | any;
}>({
  font: "Default",
  setFont: () => {}
})

/**
 * 个性化组件封装调用
 */
const ToasterProvider = () => {
  const { theme } = useTheme() as {
    theme: "light" | "dark" | "system"
  };
  return <Toaster theme={theme} />;
}

export function Providers({ children }: { children: ReactNode }) {
  const [font, setFont] = useLocalStorage<string>("novel__font", "Default");

  return (
    // 配置个性化 默认跟随系统
    <ThemeProvider attribute="class" enableSystem disableTransitionOnChange defaultTheme="system">
      <AppContext.Provider
        value={{
          font,
          setFont,
        }}
      >
        <ToasterProvider />
        { children }
        <Analytics />
      </AppContext.Provider>
    </ThemeProvider>
  )
}