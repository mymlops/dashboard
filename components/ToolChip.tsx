import React from "react";
import { Chip as MuiChip, Typography, styled } from "@mui/material";
import ToolLogo from "./ToolLogo";
import { ITool } from "../api/tool";

interface ToolChipProps {
  tool: ITool;
  size?: "small" | "medium";
  onClick?: React.MouseEventHandler;
}

const ToolChip = (props: ToolChipProps) => {
  return (
    <Chip
      variant="outlined"
      sx={{
        paddingX: props.size === "small" ? 1 : 1,
        paddingY: props.size === "small" ? 1 : 2.5,
      }}
      label={
        <Typography
          variant={props.size === "small" ? "caption" : "body2"}
          paddingX={props.size === "small" ? 1 : 1.5}
        >
          {props.tool.name}
        </Typography>
      }
      aria-label={props.tool.name}
      avatar={
        props.tool.logo ? (
          <ToolLogo
            alt={props.tool.name}
            src={props.tool.logo.src}
            size={props.size === "small" ? 20 : 24}
          />
        ) : undefined
      }
      onClick={props.onClick}
    />
  );
};

const Chip = styled(MuiChip)<{ component?: React.ReactNode }>`
  background-color: white;
  border-radius: ${(props) => props.theme.shape.borderRadius}px;
  border-color: ${(props) => props.theme.palette.grey[100]};
  :hover,
  :focus {
    background-color: white !important;
  }
  .MuiChip-label {
    padding: 0;
  }
`;

export default ToolChip;
