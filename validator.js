//importing prompting lib
const readlineSync = require('readline-sync')
//Chess pieces
const pieces = ['knight', 'bishop', 'rook', 'queen']
//X coordinates on chess board 
const xcoord = ['A', 'B', 'C', "D", "E", "F", "G", "H"]
//prompting chess piece
let i = readlineSync.keyInSelect(pieces, 'Which piece?');
console.log(`${pieces[i]} selected`);

//promting initial and final positions
let coordinates
console.log('You have to write coordinates STRICTLY in A1-A3 form,\n where A1 is the initial position and A3 is the position after move');
do {
    coordinates = readlineSync.question("Coordinates : ")
    coordinatesArr = coordinates.split('-')
} while (coordinatesArr.length !== 2 || coordinatesArr[0].split('').length !== 2 || coordinatesArr[1].split('').length !== 2 || coordinatesArr[0] === "" || coordinatesArr[1] === "" || coordinatesArr[0][1] > 8 || coordinatesArr[1][1] > 8);

//turning those positions into a numerized coordinates from 1 to 8
let x1 = xcoord.indexOf(coordinatesArr[0][0].toUpperCase()) + 1
let y1 = coordinatesArr[0][1]
let x2 = xcoord.indexOf(coordinatesArr[1][0].toUpperCase()) + 1
let y2 = coordinatesArr[1][1]

//checking the validity of the move depending of chess piece sellected
switch (i) {
    //knight
    case 0:
        if ((x1 === x2 + 1 || x1 === x2 - 1) && (y1 === y2 + 2 || y1 === y2 - 2)) {
            console.log('The move is legal');
            return
        }
        console.log('the move is not legal');
        break;
    //bishop
    case 1:
        if (x1 / y1 == x2 / y2) {
            console.log('The move is legal');
            return
        }
        console.log('the move is not legal');
        break;
    //rook
    case 2:
        if (x1 === x2 || y1 === y2) {
            console.log('The move is legal');
            return
        }
        console.log('the move is not legal');
        break;
    //queen
    case 3:
        if ((x1 / y1 == x2 / y2) || (x1 === x2 || y1 === y2)) {
            console.log('The move is legal');
            return
        }
        console.log('the move is not legal');
        break;

    default:
        console.log('the move is illegal');
        break;
}

