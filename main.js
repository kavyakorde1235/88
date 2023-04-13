
var canvas=new fabric. Canvas('myCanvas');

ball_y=0;
ball_x=0;
holl_y=400;
holl_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.froURL("golf-h1 png") ,  function (Img){
hole_obj=img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
	top:hole_y,
	left:hole_x
});
canvas.add(hole_obj);
	});

	}
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png") , function (Img)}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	document.getElementById("hd3").innerHTML="you have hit the goal!!!";
	document.getElementById(myCanvas).style.borderColor="red";

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		ball_y=ball_y+block_image_height;
			console.log("block image height = " +block_image_height);
			console.log("when up arrow key is pressed ,x ="+ ball_x + " ,y= "+ ball_y);
			canvas.remove(ball_obj);
			new image();
	}

	function down()
	{

		 if(ball_y <450)
		 {
			ball_y=ball_y+block_image_height;
			console.log("block image height = " +block_image_height);
			console.log("when down arrow key is pressed ,x ="+ ball_x + " ,y= "+ ball_y);
			canvas.remove(ball_obj);
			new image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height = " +block_image_height);
			console.log("when left arrow key is pressed ,y ="+ ball_x + " ,x= "+ ball_y);
			canvas.remove(ball_obj);
			new image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height = " +block_image_height);
			console.log("when right arrow key is pressed ,y ="+ ball_x + " ,x= "+ ball_y);
			canvas.remove(ball_obj);
			new image();
		}
	}
	
}

