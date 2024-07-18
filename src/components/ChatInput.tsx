import { useState } from "react";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  disabled: boolean;
};

export default function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l"
        placeholder="Type your message..."
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r" disabled={disabled}>
        Send
      </button>
    </form>
  );
}