const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team=players;
for(let i=0;i<players.length;i++) {
    let team1[i]=players[i];	
}
let cap1={}
for(let x in person){
	cap1[x]=person[x];
}
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
