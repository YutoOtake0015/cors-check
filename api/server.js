import dotenv from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5050;

// 環境変数有効化
dotenv.config();

// CORS設定
const corsOptions = {
  origin: "http://localhost:3000",
};
// CORS設定を有効にする場合、以下1行のコメントアウトを解除してください
// app.use(cors(corsOptions));

// 確認用エンドポイント
app.get("/check", (req, res) => {
  return res.send("Success");
});

// サーバ起動
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
