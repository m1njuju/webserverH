const express = require("express");

const app = express();
app.get('/', (request, response) => {
    response.sendFile(__dirname+'/public/login.html');
});

app.get('/nickname',(request, response) => {
    const nickname = request.query.nickname;
    response.send(`${nickname}님 환영합니다`);
});

app.listen(8080, () => {
    console.log("Server running at http://127.0.0.1:8080");
});
