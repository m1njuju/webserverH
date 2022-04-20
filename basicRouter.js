const express = require("express");

const app = express();

app.get('/', function(request, response) {
    response.send("router");
});

// 파람값으로 들고옴
app.get('/page/:id', function(request, response) {
    response.send(`<h1>${request.params.id} page </h1>`);
});

// 쿼리값으로 들고옴
app.get('/user', function(request, response) {
    // 주소에 /user?user=dss 입력해야 확인 가능
    const user = request.query.user;
    response.send(`<h1>${user} page </h1>`);
});

// get 실습
// 주소 /user/:id를 이용하여 화면에 id값 출력
app.get('/user/:id', function(request, response) {
    const id = request.params.id;
    response.send(`<h1>user ${id} page </h1>`);
});
// 주소 /board에 쿼리를 이용하여 화면에 id값 출력
app.get('/board', function(request,response) {
    const id = request.query.id;
    response.send(`<h1>board ${id} page </h1>`);
});

// post : 값을 전달할 때 사용 > body (body-parser)
app.post('/user', function(request, response) {
    console.log("post에 접근했습니다");
    response.send("post 하였습니다");
});

app.put('/user', function(request, response) {
    console.log("put으로 접근했습니다");
    response.send("put 하였습니다");
});

app.delete('/user', function(request, response) {
    console.log("delete로 접근하였습니다");
    response.send("delete 하였습니다");
});

app.listen(8080, function() {
    console.log("Server Running at http://127.0.0.1:8080");
});