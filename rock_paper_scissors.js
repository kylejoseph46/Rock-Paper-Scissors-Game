//HTML element variables:
let your_choice = document.getElementById('your_choice')
let comp_choice = document.getElementById('comp_choice')
let result = document.getElementById('result')
let rock_button = document.getElementById('rock')
let paper_button = document.getElementById('paper')
let scissors_button = document.getElementById('scissors')


//Regular variables:
let player_choice = ""
let random_num = 0
let computer_choice = ""


//Function Implementation:
rock_button.addEventListener("click", function() {
    random_num = Math.floor(Math.random() * 3) + 1
    player_choice = "rock"
    computer_choice = comp_calc(random_num)    
    your_choice.innerHTML = "Your Choice: rock"
    comp_choice.innerHTML = "Computer Choice: " + computer_choice
    check_result(player_choice, computer_choice)
})

paper_button.addEventListener("click", function() {
    random_num = Math.floor(Math.random() * 3) + 1
    player_choice = "paper"
    computer_choice = comp_calc(random_num)    
    your_choice.innerHTML = "Your Choice: paper"
    comp_choice.innerHTML = "Computer Choice: " + computer_choice
    check_result(player_choice, computer_choice)
})

scissors_button.addEventListener("click", function() {
    random_num = Math.floor(Math.random() * 3) + 1
    player_choice = "scissors"
    computer_choice = comp_calc(random_num)    
    your_choice.innerHTML = "Your Choice: scissors"
    comp_choice.innerHTML = "Computer Choice: " + computer_choice
    check_result(player_choice, computer_choice)
})

const check_result = (p_choice, c_choice) => {
    if(p_choice === "rock" && c_choice === "paper")
        result.innerHTML = "You lost!"
    else if(p_choice === "rock" && c_choice === "scissors")
        result.innerHTML = "You won!"
    else if(p_choice === "rock" && c_choice === "rock")
        result.innerHTML = "You tied!"
    else if(p_choice === "paper" && c_choice === "paper")
        result.innerHTML = "You tied!"
    else if(p_choice === "paper" && c_choice === "scissors")
        result.innerHTML = "You lost!"
    else if(p_choice === "paper" && c_choice === "rock")
        result.innerHTML = "You won!"
    else if(p_choice === "scissors" && c_choice === "paper")
        result.innerHTML = "You won!"
    else if(p_choice === "scissors" && c_choice === "scissors")
        result.innerHTML = "You tied!"
    else if(p_choice === "scissors" && c_choice === "rock")
        result.innerHTML = "You lost!"
    return 1
}

const comp_calc = (random_num) => {
    if(random_num == 1)
       return "rock" 
    else if(random_num == 2)
        return "paper"
    else if(random_num == 3)
        return "scissors"

    return 1
}