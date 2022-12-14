import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

const __dirname = path.resolve();
const app = express();
app.use(express.urlencoded({ extended: true }));

let db;

MongoClient.connect("mongodb+srv://serverHost:qwer1234@clusteryk.q2ypo2r.mongodb.net/ToDoApp?retryWrites=true&w=majority", { useUnifiedTopology: true }, (err, client) => {

    if (err) return console.log(err);

    db = client.db('ToDoApp');

    db.collection('post').insertOne();

    app.listen(8080, () => {
        console.log('listening on 8080');
    });
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/write", (req, res) => {
    res.sendFile(__dirname + "/write.html");
})

// 어떤사람이 /add 경로로 post 요청하면 ??를 하세요
app.post("/add", (req, res) => {
    res.send("전송완료");
    console.log(req.body.title);
    console.log(req.body.date);
    //db에 저장
});

