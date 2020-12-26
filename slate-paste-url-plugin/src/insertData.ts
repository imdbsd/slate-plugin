import { Range, Transforms } from "slate";
import { ReactEditor } from "slate-react";
import { Options, Pattern } from "./index";
import { getLinkType } from "./utils";

export const insertData = (
  editor: ReactEditor,
  next: (data: DataTransfer) => void,
  options?: Options
) => (data: DataTransfer) => {
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
  next(data);
};
