import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps={
    children:string;
    theme?:"secondary" | "primary";
    } & ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<ButtonProps> =({children, theme, ...rest}) => {
    
    let themeClasses = "text-white bg-yellow-500 border  border-gray-300";
    if(theme === 'secondary')
    {
        themeClasses = "border  border-gray-300 bg-red-500";
    }
    
  return (
    <button  {...rest} className={" text-center px-2 rounded-md  py-2 " + themeClasses}> 
      {children}</button>
  );
}

export default Button;