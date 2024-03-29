import { useState } from "react";

function App() {
  const [responseData, setResponseData] = useState("");

  // サーバにリクエストを送信
  const handleClick = async () => {
    const response = await fetch("http://localhost:5050/check", {
      method: "GET",
    });
    const text = await response.text();
    setResponseData(text);
  };

  return (
    <div>
      <button onClick={handleClick}>check</button>
      <br />
      {/* サーバからの返却値を表示 */}
      サーバからのデータ取得：{responseData}
    </div>
  );
}

export default App;
