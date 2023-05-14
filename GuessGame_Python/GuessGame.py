import random
a=random.randint(0,10)
d=0;
chance=0
#print(a)
for j in range(3):
	if j==0:
		chance=5;
	if j==1:
		chance=3;
	if j==2:
		chance=1;
	print(f" \n\n\n\n\t\t 	Level{j+1}	")
	print(f"You Have a {chance} Chance to Win This Game")
	while True:
		b=int(input("Guess the Number [0 to 10] :"))
		if b==a:
			print("Your Guess Was Rigth!")
			a=random.randint(0,10)
			break;
		elif b>a:
			print("Your Guess is Too High!")
			d=d+1
			if d!=chance:
				print("You Have only {} Chance Hurry up".format(chance-d))
		elif b<a:
			print("Your Guess is Too Low")
			d=d+1
			if d!=chance:
				print("You Have only {} Chance Hurry up".format(chance-d))
		if d==chance:
			print("The Game is Over!!!!!")
			break;
		if b==a-1 or b==a+1:
			print("Your Very Closer to Guess");
			
