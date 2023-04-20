// const a = require('express');
import express from 'express';
const arr=[  
{
    id:1,
    name :"youssef",
    city:"shebins"

} ,
{
    id:2,
    name :"elaalem",
    city:"shebins"

} ,
{
    id:3,
    name :"mohammed",
    city:"shebins"

}, 
{
    id:4,
    name :"abde latif",
    city:"Tanta"

}
]

const app = express();// اعمل اوبجكت جديد منهاex
app.listen(5000);
const studentfunction =(req,res)=>{
let output ='<ul>'
arr.forEach(element => {
    output+='<li>'+element.name+'</li>'
});
output+='</ul>'
res.send(output);
}
app.get("/students",studentfunction)