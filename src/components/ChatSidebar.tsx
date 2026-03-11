import { Plus } from "lucide-react";

interface ChatSidebarProps {
  onNewChat: () => void;
}

const ChatSidebar = ({ onNewChat }: ChatSidebarProps) => {
  return (
    <aside className="w-60 shrink-0 border-r border-border flex flex-col items-center justify-center bg-card">
      <button
        onClick={onNewChat}
        className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-border font-heading text-sm text-foreground hover:bg-secondary transition-colors"
      >
        <Plus className="w-4 h-4" />
        New Chat
      </button>
    </aside>
  );
};

export default ChatSidebar;
