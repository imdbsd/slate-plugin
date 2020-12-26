import { Transforms, Element, Range } from "slate";
import { ReactEditor } from "slate-react";
import { getTypeFromArrayOfPatterns, getLinkType } from "./utils";

export type Pattern = {
  type?: string;
  capture: RegExp;
};

export type Options = {
  patterns?: Pattern | Pattern[];
  defaultType?: string;
};

export const LINK_ELEMENT_TYPE = "link";

const pasteUrl = (options?: Options) => (editor: ReactEditor) => {
  const { insertData, isInline } = editor;

  editor.isInline = (element: Element) => {
    let patternType: string[] = [];
    if (options && options.patterns) {
      if (Array.isArray(options.patterns)) {
        patternType = getTypeFromArrayOfPatterns(options.patterns);
      } else if (options.patterns.type) {
        patternType = [options.patterns.type];
      }
    }
    return (
      [...patternType, LINK_ELEMENT_TYPE].includes(element.type as string) ||
      isInline(element)
    );
  };

  editor.insertData = (data: DataTransfer) => {
    const plainUrl = data.getData("text/plain");
    if (plainUrl && editor.selection && Range.isExpanded(editor.selection)) {
      let matchedPattern: Pattern | undefined;
      if (options && options.patterns) {
        if (Array.isArray(options.patterns)) {
          //   multiple pattern
          matchedPattern = options.patterns.find(
            (pattern) => !!pattern.capture.exec(plainUrl)
          );
        } else {
          // single capture
          matchedPattern = !!options.patterns.capture.exec(plainUrl)
            ? options.patterns
            : undefined;
        }
      }

      Transforms.wrapNodes(
        editor,
        {
          type: getLinkType(matchedPattern, options?.defaultType),
          link: plainUrl,
          children: [{ text: plainUrl }],
        },
        { split: true }
      );
      return;
    }
    insertData(data);
  };

  return editor;
};

export default pasteUrl;
