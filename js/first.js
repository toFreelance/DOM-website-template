var popContainer=document.getElementById("popItemContainer");
var popItemImg=document.getElementById("myImg");
var imgs=Array.from(document.querySelectorAll(".item img"));
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close=document.getElementById("close");
var currentIndex=0;
/* if image is clicked , pop up */
for(var i=0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",displayPop);
}
function displayPop(e)
{
    popContainer.style.display="flex";
    currentIndex=imgs.indexOf(e.target);
    var imgSrc=imgs[currentIndex].src;
    popItemImg.src=imgSrc;
}
/* */

/*Close pop up*/
function closePop(e)
{ 
    popContainer.style.display="none";
}
/* */
/*Go next*/
function goNext(e)
{
    currentIndex++;
    if(currentIndex==imgs.length)
    {
        currentIndex=0;
    }
    var imgSrc=imgs[currentIndex].src;
    popItemImg.src=imgSrc;
}
/* */

/*Go prev*/
function goPrev(e)
{
    currentIndex--;
    if(currentIndex<0)
    {
        currentIndex=imgs.length-1;
    }
    var imgSrc=imgs[currentIndex].src;
    popItemImg.src=imgSrc;
}
/* */
/*Control by mouse*/
close.addEventListener("click",closePop);
next.addEventListener("click",goNext
);
prev.addEventListener("click",goPrev
);
/* */

/*Control by keyboard*/
document.addEventListener("keyup",function(e)
{
    if(e.keyCode==39)
    {
        goNext();
    }
    else if(e.keyCode==37)
    {
        goPrev();
    }
    else if(e.keyCode==27)
    {
        closePop();
    }
}

);
/* */
