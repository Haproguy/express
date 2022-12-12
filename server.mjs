import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express();

app.listen(8080, function () {
    console.log("listening on 8080");
});

// 누가 /pet으로 방문하면 pet관련 안내문으로 띄워 주자
app.get("/pet", function (req, res) {
    res.send("반갑습니다.");
});

app.get("/beauty", function (req, res) {
    res.send("뷰티용품 반갑습니다");
});

app.get('', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});