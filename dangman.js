var word = ''
var guesses = new Array()
var lives = 0
var message = ''

function displayWord(){
	//display the word to be guessed, blotting out characters not yet guessed
	shownWord = ''
	for(x=0;x<word.length;x++){
		if(guesses.indexOf(word[x].toLowerCase()) != -1 || /[a-z]/i.test(word[x]) == false){
			shownWord += word[x]
		} else {
			shownWord += "_"
		}
	}
	return shownWord
}

function refresh(){
	//refresh the elements of the game
	document.getElementById('lives').innerHTML = "Lives left:" + lives
	document.getElementById('message').innerHTML = message
	document.getElementById('guesses').innerHTML = "Guesses:" + guesses
	document.getElementById('word').innerHTML = displayWord()
}

function reset(){
	// set a new game, static values
	word = "pooPoo okay, how about that???"
	lives = 10
	guesses = new Array()
	message = "ALRIGHT! New game!"
	refresh()
	console.log('reset')
}

function checkGuess(a_guess){
	acceptableGuess = false
	if(a_guess.length != 1){
		message = "One character only, bad guess >:( "
	} else if ( /[a-z]/i.test(a_guess) == false) {
		message = "Only the alphabets, poopoohead! Bad guess >:( "
	} else {
		message = "Good guess :)"
		acceptableGuess = true
	}
	return acceptableGuess
}

function loseLife(amt){
	lives -= amt
	stillAlive = true
	if(lives < 1){
		console.log('game is over')
		stillAlive = false
	}
	return stillAlive
}

function submit(a_guess){
	if(checkGuess(a_guess)){
	//is the guess an acceptable format?
		if(guesses.indexOf(a_guess.toLowerCase()) != -1){
			message += " But you already guessed " + a_guess + " ya dingus!"
		} else {
			guesses.push(a_guess.toLowerCase())
			if(word.indexOf(a_guess) == -1){
				loseLife(1)
				message += " but " + a_guess + " isn't in the word, pal"
			}
		}
	}
	refresh()
}