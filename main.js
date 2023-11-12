const messageData = {
    pronoum: ['You','She','He'],
    verb: ['will','should','find','experience'],
    noum: ['some changes in your life','have a good time','and learn cashews come from a fruit']
};
let resultWord = [];

for (let phrase in messageData){
    resultWord.push(messageData[phrase][Math.floor(Math.random() * messageData[phrase].length)]);    
}

console.log(resultWord.join(' '));