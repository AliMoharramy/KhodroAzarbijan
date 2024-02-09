import { useState } from "react";
import Authentication from "./Authentication";
import ControlPage from "./ControlPage";
export default function AdminPage() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div id="advmadm">
      {isLogin && <ControlPage />}
      {!isLogin && <Authentication setIsLogin={setIsLogin} />}
    </div>
  );
}
