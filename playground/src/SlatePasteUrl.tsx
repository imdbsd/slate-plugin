import { useState, useMemo, FC } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact, DefaultElement } from "slate-react";
import { withPasteUrl, Options } from "slate-paste-url-plugin";

export type Props = {
  options?: Options;
};

const Editor: FC<Props> = (props) => {
  const editor = useMemo(() => withPasteUrl(withReact(createEditor())), []);
  const [value, setValue] = useState<Node[]>([
    {
      type: "paragraph",
      children: [
        {
          text: `Slate paste url example, try block some text and paste url to the blocked text.
            `,
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          text:
            "To change how the url rendered, edit the renderElement in SlatePasteUrl.stories.tsx",
        },
      ],
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable
        renderElement={(props) => {
          if (props.element.type === "link") {
            return (
              <a href={props.element.link} {...props.attributes}>
                {props.children}
              </a>
            );
          }
          return <DefaultElement {...props} />;
        }}
      />
    </Slate>
  );
};

export default Editor;
