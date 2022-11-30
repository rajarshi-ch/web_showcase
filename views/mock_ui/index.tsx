import { useState } from "react";
import Content from "./components/content";
import SideBar from "./components/sideBar";

export default function App() {
  const [showSidebar, onSetShowSidebar] = useState(false);

  return (
    <div className="flex">
      <SideBar
        showSidebar={showSidebar}
        onSidebarHide={() => onSetShowSidebar(false)}
      />
      <Content onSidebarHide={() => onSetShowSidebar(true)} />
    </div>
  );
}
