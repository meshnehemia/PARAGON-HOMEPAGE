let header =document.querySelector(".header");
let change =document.getElementById("chtxt");
var count =0;

setInterval(()=>{
if(count===0){
    change.innerHTML=("OUR HOME IS OUR BEAUTY");
    count++;
    
}else if(count===1){
    change.innerHTML=("WE DO THE BEST TRY AND SEE");
    count++;
}else if(count===2){
    change.innerHTML=("YOUR BEAUTY OUR HAPPINESS");
    count++;
}else{
    change.innerHTML=("WELCOME AND BE OUR GUEST");
    count=0;
}  
},6350);
let settingimage =1;
setInterval(()=>{
    settingimage =Math.ceil(Math.random()*9);
    let image ="settingroom";
    image +=settingimage+".jpg";
    let images='url("'+image+'")';
    document.getElementById("setting").style.setProperty("background-image",images);
},2000);
let dinninginterval=1;
setInterval(()=>{
dinninginterval= Math.ceil(Math.random()*10);
let dinning ="dinning";
dinning+=dinninginterval+".jpg";
let dinnings ='url("'+dinning+'")'; 
document.getElementById("dinningi").style.setProperty("background-image",dinnings);

},1500);
let bed =1;
setInterval(()=>{
    let imag ="bedroom";
    imag +=bed+".jpg";
    let imags='url("'+imag+'")';
    document.getElementById("bedroom").style.setProperty("background-image",imags);
    bed++;
    if(bed===5){
        bed=1;
    }
},1000);
let kitchencount=1;
setInterval(()=>{
kitchencount= Math.ceil(Math.random()*3);
let kitchen ="kitchen";
kitchen+=kitchencount+".jpg";
let kitchens ='url("'+kitchen+'")'; 
document.getElementById("kitchen").style.setProperty("background-image",kitchens);

},1700);



window.addEventListener("scroll",(e)=>{
    header.classList.toggle("this",window.scrollY>2);
    let home =document.getElementById("home");
    home.classList.toggle("dothis",window.scrollY<300);
    let about=document.getElementById("about");
    about.classList.toggle("dothis",window.scrollY>300&&window.scrollY<1800);
    let contact =document.getElementById("contact");
    contact.classList.toggle("dothis",window.scrollY>1800);
});