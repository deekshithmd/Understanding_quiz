var score=0
const chalk=require("chalk")
var readlineSync=require("readline-sync")
var name=readlineSync.question("What's your name? ")
console.log("Welcome "+name+", Let's check how well you know Deekshith?")

function play(question,answer){
  var ans=readlineSync.question(question+" : ")
  if(ans.toLowerCase()==answer.toLowerCase()){
    console.log(chalk.green("Great...You are correct"))
    score=score+1
  }
  else{
    console.log(chalk.red("Ohh...You are wrong"))
  }
  console.log("Your current understanding score is ",score)
  console.log("-------------------------------------")
}
questionBank=[{
  question:"Where do I live?",
  answer:"Mangalore"
},{
  question:"What's my age?",
  answer:"23"
},{
  question:"What's my qualification?",
  answer:"B.E"
},{
  question:"Where do I work?",
  answer:"Wipro"
},{
  question:"Which Smartphone do I use?",
  answer:"Motorola"
},{
  question:"Which Laptop do I have?",
  answer:"Lenovo"
},{
  question:"Am I interested in Politics?",
  answer:"No"
}]

highScore=[{
  name:"Vinod",
  score:"6"
}]
for(var i=0;i<questionBank.length;i++){
  play(questionBank[i].question,questionBank[i].answer)
}
if(score<3){
  console.log(chalk.red("You don't know much about Deekshith...you scored ",score))
}
else{
  console.log("Yess...Done, You know me better your score is ",score)
}
for(var i=0;i<highScore.length;i++){
  if(score>highScore[i].score){
    console.log(chalk.green("Congratulations!!!....you know me very well than "+highScore[i].name+"...send me screenshot of score to update your score"))
  }
}