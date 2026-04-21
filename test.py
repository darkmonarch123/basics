import random 

#1. Variables 
 secret_number = random.randint(0,100)
 guess = 0
 attempts = 0

 print("Welcome to the Number Guessing Game!")
 print("I have selected a number between 0 and 100. Can you guess it?")

# 2.game loop
while guess != secret_number:
# 3.Input
   user_input = input("Take a guess:")

#Basic error handling: make sure it's a number!
if not user_input.isdigit():
     print("please enter a valid number.")        
     contine

guess = int(user_input)
attempts += 1

#4.Comparison Logic
if guess < secret_number:
     print("Too low! Try again.")
elif guess > secret_number:
     print("Too high! Try again.")
else:
     print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts!")


#5. result
print(f"The secret number was: {secret_number} and you guessed it in {attempts} attempts.")
print("Thanks for playing the Number Guessing Game. Goodbye!")



