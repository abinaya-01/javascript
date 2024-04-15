const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

let sumDolphins = 0;
for (let i = 0; i < dolphinsScores.length; i++) {
    sumDolphins += dolphinsScores[i];
}
const averageScoreDolphins = sumDolphins / dolphinsScores.length;

let sumKoalas = 0;
for (let i = 0; i < koalasScores.length; i++) {
    sumKoalas += koalasScores[i];
}
const averageScoreKoalas = sumKoalas / koalasScores.length;

if (averageScoreDolphins > averageScoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (averageScoreKoalas > averageScoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}