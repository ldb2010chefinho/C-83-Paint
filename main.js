canvas = document.getElementById("meuCanvas");
ctx= canvas.getContext("2d");
 var mouseEvent ="";
 var ultimoX,ultimoY;
 var color="darkgreen";
 var widthLine = 2;
 
 canvas.addEventListener("mousedown",myMouseDown);
 function myMouseDown(e){
    color =document.getElementById("cor").value;
    widthLine =document.getElementById("espessura").value;
    mouseEvent = "mouseDown"
 };

 canvas.addEventListener("mouseup",myMouseUp);
 function myMouseUp(e){
    mouseEvent = "mouseUp"
 };

 canvas.addEventListener("mouseleave",myMouseLeave);
 function myMouseLeave(e){
    mouseEvent = "mouseLeave"
 };

 canvas.addEventListener("mousemove",myMouseMove);
 function myMouseMove(e){
    var positionMouseX = e.clientX-canvas.offsetLeft;
    var positionMouseY = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        console.log("Última posição das coordenadas x e y = ");
        console.log("x = " + ultimoX + "y = " + ultimoY);
        ctx.moveTo(ultimoX, ultimoY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x = " + positionMouseX + "y = " + positionMouseY);
        ctx.lineTo(positionMouseX, positionMouseY);
        ctx.stroke();
    }
        ultimoX = positionMouseX;
        ultimoY = positionMouseY;
 };

//evento touch
var lastPositionOfTouchX, lastPositionOfTouchY;
var width = screen.width;

newWidth = screen.width - 70;
newHeight = screen.height - 300;
if(width < 992){
document.getElementById("myCanvas").width = newWidth;
document.getElementById("myCanvas").height = newHeight;
document.body.style.overflow = "hidden";
};


 function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
 };
 canvas.addEventListener("touchstart", myTouchStart);

 function myTouchStart(e){
      console.log("myTouchStart");
 };


 //Adicional
 color = document.getElementById("color").value;
 widthOfLine = document.getElementById("widthOfLine").value;
 //fim

 lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
 lastPositionOfTouchY= e.touches[0].clientY- canvas.offsetTop;

 canvas.addEventListener("touchmove", myTouchMove);

 function myTouchMove(e){
   currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
   currentPositionOfTouchY= e.touches[0].clientY- canvas.offsetTop;
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = widthOfLine;
   ctx.moveTo(lastPositionOfTouchX, lastPositionOfTouchY);
   ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
   ctx.stroke();

   lastPositionOfTouchX = currentPositionOfTouchX;
   lastPositionOfTouchY = currentPositionOfTouchY;

 };

