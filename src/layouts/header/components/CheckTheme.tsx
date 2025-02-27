"use client";

import { Button } from "@/components/ui/button"
import { Monitor, SunDim, Moon, Check } from "lucide-react"
import { useTheme } from "next-themes"
import { Popover, PopoverContent, PopoverTrigger } from "@/layouts/header/components/popover";
import { useEffect, useState } from "react";

const appearances = [
  {
    theme: "System",
    icon: <Monitor className="h-4 w-4" />,
  },
  {
    theme: "Light",
    icon: <SunDim className="h-4 w-4" />,
  },
  {
    theme: "Dark",
    icon: <Moon className="h-4 w-4" />,
  },
];

const CheckTheme = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const [ btnIcon, setBtnIcon ] = useState(<Monitor className="h-2 w-2 p-2" />)
  useEffect(() => {
    const themeKey = currentTheme
    switch (themeKey) {
      case "system":
        setBtnIcon(<Monitor className="h-2 w-2 p-2" />)
        break;
      case "light":
        setBtnIcon(<SunDim className="h-2 w-2 p-1" />)
      break;case "dark":
      setBtnIcon(<Moon className="h-2 w-2 p-2" />)
        break;
    }
  }, [currentTheme])
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" asChild>
          {
            btnIcon
          }
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-2" align="end" >
        {
          appearances.map(({ theme, icon }) => (
            <Button
              variant="ghost"
              key={theme}
              className="flex w-full items-center justify-between rounded px-2 py-1.5 text-sm"
              onClick={() => {
                setTheme(theme.toLowerCase());
              }}
            >
            <div className="flex items-center space-x-2">
              <div className="rounded-sm border  p-1">{icon}</div>
              <span>{theme}</span>
            </div>
            {currentTheme === theme.toLowerCase() && <Check className="h-4 w-4" />}
            </Button>
          ))
        }
      </PopoverContent>
    </Popover>
  )
}

export default CheckTheme