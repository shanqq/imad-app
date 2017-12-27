var button=document.getElementById("counter");
var counter=0;

button.onclick=function (){
    //create a request
    var request = new XMLHttpRequest(); 
    
    //capturing the response and storing in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
            var counter=request.responseText;
            var span=document.getElementById("total");
            span.innerHTML=counter.toString();
            }
        }
    }
    //make a request
    request.open('GET','http://ansarishaquib25.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

var namesinput=document.getElementById("name");

var name=namesinput.value;

var submit=document.getElementById("submit-but");

submit.onclick=function(){
  
 var names=['name1','name2','name3'];
 var list='';
 
 for( var i=0;i<names.length;i++)
 {
     list+='<li>' +names[i]+'</li>';
     
 }
  var ul=document.getElementById("namelist");
  ul.innerHTML=list;
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
