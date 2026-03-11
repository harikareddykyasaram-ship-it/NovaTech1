import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";

const Index = () => {
  const [chatKey, setChatKey] = useState(0);

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar onNewChat={() => setChatKey((k) => k + 1)} />
      <ChatWindow resetKey={chatKey} />
    </div>
  );
};

export default Index;
