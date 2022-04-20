const { response } = require("express");

const express = require("express");

const app = express();
app.use(express.static("public"));


app.get('/', (request, response) => {
    // 다양한 파일을 public폴더에 넣어서 확인하기
    const template = `
    <h1>Hello express</h1>
    <a href="./정적파일.html">파일입니다<a>
    <a href="./white-flower.jpg">사진입니다<a>
    <a href="./white-flower.jpg">pdf입니다<a>
    <a href="./white-flower.jpg">zip입니다<a>
    `;

    response.send(template);
});

app.listen(8080, () => {
    console.log("Server running at http://127.0.0.1:8080");
});