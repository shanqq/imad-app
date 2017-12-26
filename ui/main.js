
<script>

<script>

window.onscroll = function(){scrollfunction()};
function scrollfunction()
{
 if (document.body.scrollTop >30 || document.documentElement.scrollTop >30)
{
 	document.getElementById("naav").style.top="0";

}
else {
document.getElementById("naav").style.top="-50px";
}

}

</script>


<script>
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

</script>
</script>