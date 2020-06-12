const express=require("express");
const app=express();
app.get("/",function(request,response)
{
    response.send("<h1>eeeeeeeeeeee</h1>");
    
});
app.get("/contact",function(request,response)
{
    response.send("<h1>qqqqqqqqqqqqq</h1>");
    
});
app.get("/about",function(request,response)
{
    response.send("<h1>eeeeeeeeooooooooooo</h1>");
    
});
app.listen(3000,function()
{
    console.log("server started at port 3000");
    
});