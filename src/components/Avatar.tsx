import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

// https://avatars.githubusercontent.com/u/44756508?v=4

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const x = (a?: number, b: number) => a + b;
export function Avatar({ hasBorder, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
/* Quando imagens são um input do usuário (dinamica baseado em cada user da aplicação) não colocamos texto alternativo " alt='' "  */
