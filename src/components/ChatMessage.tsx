import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

const ChatMessage = ({ role, content, isStreaming }: ChatMessageProps) => {
  return (
    <div className="mb-10">
      <div className="text-xs font-heading text-muted-foreground mb-2 uppercase tracking-wider">
        {role === "user" ? "You" : "Gemini"}
      </div>
      <div className="font-body text-foreground leading-relaxed prose prose-sm max-w-none prose-headings:font-heading prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-code:bg-secondary prose-code:px-1 prose-code:rounded-sm">
        <ReactMarkdown>{content}</ReactMarkdown>
        {isStreaming && (
          <span className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle animate-cursor-blink" />
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
