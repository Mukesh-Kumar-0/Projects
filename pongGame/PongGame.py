import turtle
win=turtle.Screen()
win.setup(800,600)
win.tracer(0)
turtle.colormode(255)
win.bgcolor(117, 240, 230)
win.title("Pong Game By Me")


scoreA=0
scoreB=0
pen=turtle.Turtle()
pen.speed(0)
pen.color("black")
pen.penup()
pen.hideturtle()
pen.goto(0,260)
pen.write("Player A :0 Player B :0",align="center",font=("times new roman",24,'normal'))
#this is Left Square Box
lp=turtle.Turtle()
lp.speed(0)
lp.shape("square")
lp.color(0,0,0)
lp.penup()
lp.goto(-380,0)
lp.shapesize(stretch_wid=5,stretch_len=1)
#This is Rigth Square Box
rp=turtle.Turtle()
rp.speed(0)
rp.shape("square")
rp.color(0,0,0)
rp.penup()
rp.goto(380,0)
rp.shapesize(stretch_wid=5,stretch_len=1)

#this is Form Ball 
ball=turtle.Turtle()
ball.shapesize(stretch_wid=1.5,stretch_len=1.5)
ball.speed(0)
ball.shape("circle")
ball.color(20,90,200)
ball.dx=0.2
ball.dy=0.2	


#####Funtion for moving
def leftKeyUp():
	lp.sety(lp.ycor()+30)

def leftKeyDown():
	lp.sety(lp.ycor()-30)
def rKeyUp():
	rp.sety(rp.ycor()+30)
	
def rKeyDown():
	rp.sety(rp.ycor()-30)

##This is For KeyList
win.listen()
win.onkeypress(leftKeyUp,'w')
win.onkeypress(leftKeyDown,'s')
win.onkeypress(rKeyUp,'Up')
win.onkeypress(rKeyDown,'Down')


while True:
	win.update()
	ball.penup()
	ball.setx(ball.xcor()+ball.dx)
	ball.sety(ball.ycor()+ball.dy)
	if ball.ycor()>290:
		ball.sety(290)
		ball.dy*=-1
	
	
	if ball.ycor() < -290:
		ball.sety(-290)
		ball.dy*=-1
		
		#right wall
		
	if ball.xcor() >390:
		ball.setx(390)
		ball.dx*=-1
		scoreA+=1
		pen.clear()
		pen.write("Player A :{} Player B :{}".format(scoreA,scoreB),align="center",font=("times new roman",24,'normal'))
		
	if ball.xcor() < -390:
		ball.setx(-390)
		ball.dx*=-1
		scoreB+=1
		pen.clear()
		pen.write("Player A :{} Player B :{}".format(scoreA,scoreB),align="center",font=("times new roman",24,'normal'))

	if ball.xcor() >370 and rp.ycor()-50<ball.ycor() <rp.ycor()+50:
		ball.setx(360)
		ball.dx*=-1
		
	if ball.xcor() < -370 and lp.ycor()-50<ball.ycor() <lp.ycor()+50:
		ball.setx(-360)
		ball.dx*=-1
	
	
	
	
	
