import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import './App.css';

function App() {
  const editor = useCreateBlockNote();
  return (
    <div >
        <BlockNoteView editor={editor} theme={"light"} className="main" />
    </div>
  );
}

export default App;
