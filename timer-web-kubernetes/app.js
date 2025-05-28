const express = require('express');
const app = express();
const port = 3000;

// 정적 파일은 public 폴더에서 제공
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`타이머 웹이 http://localhost:${port} 에서 실행 중`);
});
