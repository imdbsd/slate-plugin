import { useState, useMemo } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import deserialize from "slate-string-deserialize";

const initialValue = deserialize("A line of text in a paragraph.");

const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Node[]>(initialValue);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};

export default Editor;
