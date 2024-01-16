import { useState } from "react";

function App() {
  const [respostData, setRespostData] = useState("");

  // サーバにリクエストを送信
  const handleClick = async () => {
    const response = await fetch("http://localhost:5050/check", {
      method: "GET",
    });
    const text = await response.text();
    setRespostData(text);
  };

  return (
    <div>
      <button onClick={handleClick}>check</button>
      <br />
      {/* サーバからの返却値を表示 */}
      サーバからのデータ取得：{respostData}
    </div>
  );
}

export default App;
