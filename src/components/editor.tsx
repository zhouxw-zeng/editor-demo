import { Editor } from "novel";

export default function TextEditor() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Editor 
        className="border rounded-lg shadow-sm"
        defaultValue="Start writing..."
        storageKey="novel-content"
      />
    </div>
  )
}