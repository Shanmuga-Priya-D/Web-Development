var n=Math.random()*6;
n=Math.floor(n)+1;
var r="dice"+n+".png";
var rn="images/"+r;
var i1=document.querySelectorAll("img")[0];
i1.setAttribute("src",rn);
console.log(n);

var n1=Math.random()*6;
n1=Math.floor(n1)+1;
var r1="dice"+n1+".png";
var rn1="images/"+r1;
var i2=document.querySelectorAll("img")[1];
i2.setAttribute("src",rn1);


if(n>n1)
{
    document.querySelector("h1").innerHTML="Player 1 wins !!!! ";
}
else if(n1>n)
{
    document.querySelector("h1").innerHTML="Player 2 wins !!!!";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}