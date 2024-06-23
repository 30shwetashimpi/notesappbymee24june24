const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host:" sql12.freesqldatabase.com",
	user:"sql12715587",
	password:"qA1IlGhBDR",
	database:"sql12715587"
});

app.post("/save",(req,res)=>{
	let data = [req.body.id,req.body.title,req.body.content]
	let sql = "insert into notes values(?,?,?)";
	con.query(sql,data,(err,result)=>{
		if(err)		res.send(err);
		else		res.send(result);
	});
});


app.get("/gs",(req,res)=>{
	let sql = "select * from notes";
	con.query(sql,(err,result)=>{
		if(err)		res.send(err);
		else		res.send(result);
	});
});

app.delete("/ds",(req,res)=>{
	let data =[req.body.id]
	let sql ="delete from notes where id=? ";
	con.query(sql,data,(err,result)=>{
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.put("/us",(req,res)=>{
	let data =[req.body.title,req.body.content,req.body.id]
	let sql ="update notes set title =?,content=? where id=?";
	con.query(sql,data,(err,result)=>{
		if(err)			res.send(err);
		else			res.send(result);
	});
});

app.listen(9000,()=>{console.log("ready @ 9000");});