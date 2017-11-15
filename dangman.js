var the_text = "potato poo poo"
function changeTheWord(a_new_word){
	the_text = a_new_word
}

function checkGuess(a_guess){
	acceptable = 'False'
	if(a_guess.length == 1 && a_guess.match(/[a-a]/i)){
		acceptable = 'True'
	}
	return acceptable
}

