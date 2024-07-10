import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import './App.css';

function App() {
  const editor = useCreateBlockNote();
  return (
    <div >
      <h1>Hello BlockNote!</h1>
        <BlockNoteView editor={editor} theme={"light"} className="main" />
    </div>
  );
}

export default App;
