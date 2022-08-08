import { StaticImageData } from "next/image";

export interface ITool {
  name: string;
  logo?: StaticImageData;
  port: string;
}
