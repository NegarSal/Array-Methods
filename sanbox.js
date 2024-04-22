const scores = [10, 30, 15, 25, 50, 40, 5];

// filter method example1:
const filteredScores = scores.filter(score => score > 20);
console.log(filteredScores);

// filter method example2:
const users = [
    { name: 'shaun', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'mario', premium: false },
    { name: 'chun-li', premium: true }
];
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);