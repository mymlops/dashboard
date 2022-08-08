import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface LogoProps {
  src: string;
  alt?: string;
  size?: number;
  styles?: React.CSSProperties;
}

const ToolLogo = (props: LogoProps) => {
  return (
    <Box
      sx={{
        height: props.size ? props.size : "auto",
        width: props.size ? props.size : "auto",
        position: "relative",
        ...props.styles,
      }}
    >
      <Image
        alt={props.alt}
        src={props.src}
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default ToolLogo;
