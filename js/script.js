var mybutton= document.querySelector('button');
var mybody= document.querySelector('body');
var mycolors=['red','blue','green','cyan','black','yellow','voilet'];

mybody.style.backgroundColor='pink';
mybutton.addEventListener('click',myBgColor);

function myBgColor(){
    var colorNum= Math.floor(Math.random()*mycolors.length);
    mybody.style.backgroundColor=mycolors[colorNum];
}