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
