const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let secret = 0;

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

function start() {
    secret = randomInteger(0, 100)
    question()
}
function question (){
    rl.question('Введите число от 0 до 100:', answer )

}

function answer (answer){
    if(Number(answer) > secret){
        console.log('Меньше'),
        question()
    }
    else if (Number(answer) < secret){
        console.log('Больше'),
        question()
    }
    else {
        console.log('Верно! Вы победили!')
        rl.question('Продолжим?', function(answer){
            if(answer == 'y'){
                start()
            }
            
            else {
            return
        }
        },)
    }
}

start()