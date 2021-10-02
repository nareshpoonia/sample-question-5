var readlineSync = require("readline-sync");
var userNameFirst = readlineSync.question("May I have your name? ");
var unitTestMarksFirst = Number(
  readlineSync.question("What was your unit test marks ? ")
);
var prefinalMarksFirst = Number(
  readlineSync.question("What was your prefinal Marks ? ")
);
var finalMarksFirst = Number(
  readlineSync.question("What were your final Marks ? ")
);
var TotalMarksFirst = unitTestMarksFirst + prefinalMarksFirst + finalMarksFirst;
console.log(TotalMarksFirst);

var readlineSync = require("readline-sync");
var userNameSecond = readlineSync.question("May I have your name? ");
var unitTestMarksSecond = Number(
  readlineSync.question("What was your unit test marks ? ")
);
var prefinalMarksSecond = Number(
  readlineSync.question("What was your prefinal Marks ? ")
);
var finalMarksSecond = Number(
  readlineSync.question("What were your final Marks ? ")
);
var TotalMarksSecond =
  unitTestMarksSecond + prefinalMarksSecond + finalMarksSecond;

var readlineSync = require("readline-sync");
var userNameThird = readlineSync.question("May I have your name? ");
var unitTestMarksThird = Number(
  readlineSync.question("What was your unit test marks ? ")
);
var prefinalMarksThird = Number(
  readlineSync.question("What was your prefinal Marks ? ")
);
var finalMarksThird = Number(
  readlineSync.question("What were your final Marks ? ")
);
var TotalMarksThird = unitTestMarksThird + prefinalMarksThird + finalMarksThird;

var readlineSync = require("readline-sync");
var userNameFourth = readlineSync.question("May I have your name? ");
var unitTestMarksFourth = Number(
  readlineSync.question("What was your unit test marks ? ")
);
var prefinalMarksFourth = Number(
  readlineSync.question("What was your prefinal Marks ? ")
);
var finalMarksFourth = Number(
  readlineSync.question("What were your final Marks ? ")
);
var TotalMarksFourth =
  unitTestMarksFourth + prefinalMarksFourth + finalMarksFourth;

var readlineSync = require("readline-sync");
var userNameFifth = readlineSync.question("May I have your name? ");
var unitTestMarksFifth = Number(
  readlineSync.question("What was your unit test marks ? ")
);
var prefinalMarksFifth = Number(
  readlineSync.question("What was your prefinal Marks ? ")
);
var finalMarksFifth = Number(
  readlineSync.question("What were your final Marks ? ")
);
var TotalMarksFifth = unitTestMarksFifth + prefinalMarksFifth + finalMarksFifth;

var FinalScores = [
  TotalMarksFirst,
  TotalMarksSecond,
  TotalMarksThird,
  TotalMarksFourth,
  TotalMarksFifth,
];

var maximumScore = Math.max(...FinalScores);

if (maximumScore === TotalMarksFirst) {
  console.log(
    "The HighestScore " + maximumScore + " belongs to " + userNameFirst
  );
} else if (maximumScore === TotalMarksSecond) {
  console.log(
    "The HighestScore " + maximumScore + " belongs to " + userNameSecond
  );
} else if (maximumScore === TotalMarksThird) {
  console.log(
    "The HighestScore " + maximumScore + " belongs to " + userNameThird
  );
} else if (maximumScore === TotalMarksFourth) {
  console.log(
    "The HighestScore " + maximumScore + " belongs to " + userNameFourth
  );
} else if (maximumScore === TotalMarksFifth) {
  console.log(
    "The HighestScore " + maximumScore + " belongs to " + userNameFifth
  );
}
