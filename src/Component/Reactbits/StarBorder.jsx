import React from 'react'

const StarBorder = ({
    as: Component = "button",
    className = "",
    color = "white",
    speed = "2s",
    children,
    ...rest
  }) => {
    return (
      <Component className={`relative inline-block py-[1px] overflow-hidden rounded-[12px] ${className}`} {...rest}>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div
          className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        ></div>
        <div className="relative z-1  basalt text-white text-center text-[15px] py-[7px] px-[20px] rounded-[0px]">
          {children}
        </div>
      </Component>
    );
  };
  
  export default StarBorder;
  