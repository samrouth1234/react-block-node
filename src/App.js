import React, { useState } from 'react';
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import './App.css';

function App() {
  const [blocks, setBlocks] = useState([]); // useState<NoteBlock[]
  const editor = useCreateBlockNote();
  console.log(blocks);
  return (
    <div>
      <h1>Hello BlockNote!</h1>
      <BlockNoteView 
          editor={editor}
          theme={"light"} 
          className="main"
          onChange={() => {
            // Saves the document JSON to state.
            setBlocks(editor.document);
          }}
          />
        <div className={"item bordered"}>
        <pre>
          <code>{JSON.stringify(blocks, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;