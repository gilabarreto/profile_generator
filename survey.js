const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = [];

rl.question('What\'s your name? ', (answer1) => {
  survey.push(answer1);
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    survey.push(answer2);
    rl.question('Which meal is your favourite (breakfast, dinner, lunch, ...)? ', (answer3) => {
      survey.push(answer3);
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
        survey.push(answer4);
        rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer5) => {
          survey.push(answer5);
          console.log(`${survey[0]} likes ${survey[1]} and also loves ${survey[3]} for ${survey[2]}. This is actually the reason for his/hers superpower: ${survey[4]}`)
          rl.close();
        })
      })
    })
  })
});

