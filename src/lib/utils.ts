import { createCn } from "cn/config";

/** cn com os tokens de tamanho de texto do @theme (senão text-h3 e text-ink conflitam). */
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h2", "h3", "lead", "body", "small", "label"] }],
      "font-family": [{ font: ["display"] }],
    },
  },
});
