import { Element } from "slate";
import { Pattern, LINK_ELEMENT_TYPE } from "./index";
import { getTypeFromArrayOfPatterns } from "./utils";

export const isInline = (
  next: (element: Element) => boolean,
  patterns?: Pattern | Pattern[]
) => (element: Element) => {
  let patternType: string[] = [];
  if (patterns) {
    if (Array.isArray(patterns)) {
      patternType = getTypeFromArrayOfPatterns(patterns);
    } else if (patterns.type) {
      patternType = [patterns.type];
    }
  }
  return (
    [...patternType, LINK_ELEMENT_TYPE].includes(element.type as string) ||
    next(element)
  );
};
