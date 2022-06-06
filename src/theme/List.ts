import { listAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleIcon: SystemStyleObject = {
  marginEnd: "0.5em",
  display: "inline",
  verticalAlign: "text-bottom",
};

const baseStyle: PartsStyleObject<typeof parts> = {
  container: {
    mt: "0",
  },
  item: {
    ml: 0,
  },
  icon: baseStyleIcon,
};

export default {
  parts: parts.keys,
  baseStyle,
};
