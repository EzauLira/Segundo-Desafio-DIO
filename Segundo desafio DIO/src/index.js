//Sum variable
let level = sum(200, 90)

//Victory and defeat summation function
function sum(victory, lose){
    let summation = victory - lose
    return summation
}
//empty variable that receives the rating value
rank = ""

//Decision structure, which receives the calculation value and prints the result in the rank
if(level <= 10){
    rank = "IRON"
}else if(level >= 11 && level <= 20){
    rank = "BRONZE"
}else if(level >= 21 && level <= 50){
    rank = "SILVER"
}else if(level >= 51 && level <= 80){
    rank = "GOLD"
}else if (level >= 81 && level <= 90){
    rank = "DIAMOND"
}else if (level >= 91 && level <= 100){
    rank = "LEGENDARY"
}else {
    rank = "IMMORTAL"
}

//Output in console
console.log("\n                 **** HERO RANK AND LEVEL QUERY ****  ")
console.log(" ---> Congratulation!!! The hero is in rank: "+ rank + ", and level: " + level + "\n" )

