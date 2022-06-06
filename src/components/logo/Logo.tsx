import { Icon, IconProps } from "@chakra-ui/icon";
import { FC } from "react";

const Logo: FC<IconProps> = ({ viewBox, ...props }) => {
  return (
    <Icon viewBox="0 0 292 44" w="auto" h="auto" {...props}>
      <path
        d="M90.796 1 74.143 33.949 57.343 1h-9.87l21.63 41.769h10.248L100.834 1H90.796Zm14.7 0h41.727v8.862h-41.706L105.496 1Zm0 16.485h41.727v8.82h-41.706l-.021-8.82Zm0 16.422h41.727v8.862h-41.706l-.021-8.862Zm57.477 1.176V1h-8.904v41.769h32.823l1.071-2.1 2.919-5.649-27.909.063Zm82.404 7.686h-10.059l-16.8-32.949-16.653 32.949h-10.038l3.864-7.476L213.394 1h10.248l21.735 41.769Zm4.662-.609v.609h.336l-.336-.609ZM1 1h41.706v8.82H1V1Zm0 16.485h41.706v8.799H1v-8.799ZM1 33.97h41.706v8.799H1V33.97ZM282.925 1v29.526L259.09 1h-9.051v41.769h8.883v-29.4l23.856 29.4h9.051V1h-8.904Z"
        fill="url(#evelanLogoGradient)"
      />
      <defs>
        <linearGradient
          id="evelanLogoGradient"
          x1="1"
          y1="21.895"
          x2="291.829"
          y2="21.895"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#40A4B4" />
          <stop offset=".08" stopColor="#329AAB" />
          <stop offset=".32" stopColor="#0E8194" />
          <stop offset=".45" stopColor="#00778B" />
          <stop offset=".6" stopColor="#007787" />
          <stop offset="1" stopColor="#007377" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default Logo;
