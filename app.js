const express = require(`express`);
const ejs = require(`ejs`);
const bodyPparser = require(`body-parser`);

const app = express();
const port = 3000;


/*value*/
var items = ["Buy Food" ,"Cook Food" ,"Eat Food"];




/*ต้องใส่เสมอ*/
app.set(`view engine`,`ejs`);
app.use(bodyPparser.urlencoded({ extended: true }))


app.get(`/`,(req,res)=>{
// res.send(__dirname+`\\index.html`);
// res.sendFile(__dirname+`\\index.html`);
res.render("list", {newListItem:items});/*จุดที่ทำให้เปลี่ยนเส้นทาง เริ่ม list.ejs */
});










app.post(`/`,(req,res)=>{
console.log(req.body.item);
var input =req.body.item;
items.push(input);


res.redirect("/")  /*เปลี่ยนเส้นทาง  ประมารเหมือนรีหน้ากลับไปหน้าหลัก*/
});






app.listen(port,()=>{
    console.log(`server is running on port ` + port + `.`);
});










