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
            counter=req.responseText;
            var span=document.getElementById('total');
            span.innerHTML=counter.toString();    
          }
        }
    }
    //make a request
    request.open('GET','http://ansarishaquib25.imad.hasura-app.io/counter,true);
    request.send(null);
    
};

var namesinput=document.getElementById("name");

var name=namesinput.value;

var submit=document.getElementById("submit-but");

submit.onclick=function(){
  
   var request = new XMLHttpRequest(); 
    
    //capturing the response and storing in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
 
                        for( var i=0;i<names.length;i++)
             {
                 list+='<li>' +names[i]+'</li>';
                 
             }
              var ul=document.getElementById("namelist");
              ul.innerHTML=list;
          }
        }
    }
    //make a request
    request.open('GET','http://ansarishaquib25.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
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
