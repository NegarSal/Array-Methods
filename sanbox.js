// sort method example1 - sorting strings:
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
//names.reverse();

console.log(names);

// sort method example2 - sorting numbers:
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a, b) => b - a);
scores.sort((a, b) => a - b);

console.log(scores);


// sort method example3 - sorting objects:
const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 }
];
players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
});
console.log(players);

// shorter version - sorting objects:
players.sort((a,b) => b.score - a.score);
console.log(players);