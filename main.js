const pronoum = ["You","Your","She"];
const verb = ["will","should","find","experience"];
const noum = ["some changes in your life","have a good time"];

let resultWord = []

resultWord.push(pronoum[Math.floor(Math.random() * pronoum.length)]);
resultWord.push(verb[Math.floor(Math.random() * verb.length)]);
resultWord.push(noum[Math.floor(Math.random() * noum.length)]);


console.log(resultWord);