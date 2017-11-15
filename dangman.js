var the_word = "potato poo poo"
function changeTheWord(a_new_word){
	the_text = a_new_word
}

function reset(){
	reset_word = the_word.replace(/[a-z]/gi,'_')
	document.getElementById("the_text").innerHTML = reset_word
}
function checkGuess(a_guess){
	acceptable = 'False'
	if(a_guess.length == 1 && a_guess.match(/[a-z]/i)){
		acceptable = 'True'
	}
	return acceptable
}

function updateWord(a_char){
	current_word = document.getElementById("the_text").innerHTML
	new_word = ''
	for(x=0;x<current_word.length;x++){
		if(a_char == the_word[x]){
			new_word += a_char
		} else {
			new_word += current_word[x]
		}
		console.log(new_word[x])
	}
	console.log(new_word)
	document.getElementById("the_text").innerHTML = new_word
}

function submitGuess(){
	var a_new_guess = document.getElementById("guess").value
	if(checkGuess(a_new_guess) == 'False'){
		console.log("no, only single letters")
		return "false"
	} else {
		console.log("good guess! :" + a_new_guess)
		updateWord(a_new_guess)
	}
}