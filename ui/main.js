
var button=document.getElementById('counter');
var counter=0;
button.onclick()=function (){
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
};




























/*window.onscroll = function(){scrollfunction()};

function scrollfunction()
{
 if (document.body.scrollTop >10 || document.documentElement.scrollTop >20)
{
 	document.getElementById("naav").style.top="0";

}
else {
document.getElementById("naav").style.top="-50px";
}

}


var value=0;
carousel();
function carousel(){

var i;
var x=document.getElementsByClassName("slides");
for(i=0;i<x.length;i++)
{
x[i].style.display="none";

}
value++;
if (value> x.length) {value = 1} 
    x[value-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
*/
