import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// 引用外部cn处理
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 类似一个处理CSS类名的工具函数 原生
// export function cn (...inputs: any[]) {
//   return inputs
//     .filter(Boolean) // 过滤空值
//     .map((input) => {
//       // 如果是字符串，直接返回
//       if (typeof input === "string") {
//         return input;
//       }
//       if (typeof input === "object") {
//         return Object.entries(input)
//           .filter(([_, value]) => Boolean(value)) // 过滤对象空值属性
//           .map(([key]) => key)
//           .join("");
//       }
//       return ""
//     })
//     .join(" ")
//     .trim();
// }