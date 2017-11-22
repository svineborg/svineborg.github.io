//new object oriented script
var newGmame(num_of_lives,word_to_guess) = {
	word: word_to_guess
	lives: num_of_lives
	guesses: []
	message:"new game!"
	
	submitGuess: function(a_guess){
		if(a_guess.length != 1 || !(a_guess.match(/[a-z]/i))){
			message += "BAD GUESS" 
		} else {
			for(x=0;x<word.length;x==){
				if(word[x] == a_guess){
					guesses.push(a_guess)
				} else {
					message = "sorry, bad guess"
					lives -= 1
				}
			}
		}
	}
}

//old script
var the_word = "potato poo poo"
var guess_so_far = ''
var amount_of_lives = 10
var message 
var lives

//initialize
lives = amount_of_lives
message = 'welcome to Dangman!'
// done initializing

function changeLives(new_amount){
	lives = new_amount
}
function changeTheWord(new_word){
	the_text = new_word
}

function changeMessage(new_message){
	message = new_message
}
function reset(){
	guess_so_far = the_word.replace(/[a-z]/gi,'_')
	message = ''
	lives = amount_of_lives
	updateScreen()
}

function acceptableGuess(a_guess){
	acceptable = 'False'
	if(a_guess.length == 1 && a_guess.match(/[a-z]/i)){
		acceptable = 'True'
	}
	return acceptable
}

function checkGuess(a_guess){
	
}

function updateWord(a_char){
	guess_so_far = document.getElementById("the_text").innerHTML
	new_word = ''
	for(x=0;x<guess_so_far.length;x++){
		if(a_char == the_word[x]){
			new_word += a_char
		} else {
			new_word += guess_so_far[x]
		}
	}
	guess_so_far = new_word
	//document.getElementById("the_text").innerHTML = new_word
}

function submitGuess(){
	var a_new_guess = document.getElementById("guess").value
	var was_correct = "False"
	if(acceptableGuess(a_new_guess) == 'False'){
		console.log("no, only single letters")
	} else if(checkGuess(a_new_guess) == 'True'){
		changeMessage("good guess! :" + a_new_guess)
		updateWord(a_new_guess)
		was_correct = "True"
	} else {
		changeMessage("sorry, your guess [" + a_new_guess + "[ one step closer to sweet, sweet death!")
		changeLives(lives - 1)
		return "False"
	}
	updateScreen()
	return was_correct
}

function updateScreen(){
	document.getElementById("the_text").innerHTML = guess_so_far
	document.getElementById("lives").innerHTML = lives
	document.getElementById("message").innerHTML = message
}



// other older thing





function newGame(total_lives, word_to_guess){
	//starts a new hangman game
	var lives = total_lives
	var the_word = word_to_guess
	var guesses = new Array()
	var message = ""
	
	function updateScreen(){
	//updates the elements for the game
		new_word = ""
		for(x=0;x<guesses.length;x++){
			if(the_word.test(/(guesses[x])/g)
		}
	}
	
	function endGame(){
	// make the stuff that will reveal the end screen
	}
	
	function checkGuess(a_guess,the_word){
	//check if a guess is in the word, true if is false if not
	//as a subsidiary action, check if the word has already been guessed alter the message
		for(x=0;x<guesses.length;x++){
			if(new RegExp(guesses[x]).test(the_word)){ alreadyin = true }
		}
	}
	
	function acceptableGuess(a_guess){
	// test to see if a guess is acceptable - single character alpha numeric
		return (a_guess.length == 1 && /[a-z]/i.test(a_guess))
	}
	
	function loseLife(amount){
		lives -= amount
		if(lives < 1){
			message = "SAD! Low energy. Believe me, I know winning, and I am, really, I mean, you lose. Yeah, you lose."
			endGame()
		}
	}
	
	function submitGuess(a_guess){
	//submit a guess into the game's flow:
	// guess-> test for acceptability -> test for correctness -> test for game's end -> celebrate or end
		if(!acceptableGuess(a_guess){
			message = "No. I have the best guesses, single letter, nothing more. The best, I mean really great" 
		} else if(!checkGuess){
			message = "FAKE NEWS! Try again, bad hombre. Sad."
			loseLife(1)
		} else {
			processGuess(a_guess)
		}
		
		updateScreen()
	}
}