import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals" /** , "next/typescript" */), // 允许 any
  {
    rules: {
      "react/no-typos": "error",
      "react/prop-types": "off",
      "no-var": "error", // 要求使用let \ const 而不使用var
      "prefer-const": "off", // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
      "no-use-before-define": "off", // 禁止在 函数/类/变量 定义之前使用它们
      // 配置 import/no-anonymous-default-export 规则
      "import/no-anonymous-default-export": [
        "error",
        {
          allow: ["class", "function"], // 允许直接导出类的实例和匿名函数
        },
      ],
    }
  }
];

export default eslintConfig;
