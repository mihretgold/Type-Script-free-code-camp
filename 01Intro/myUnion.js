"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var mihret = { name: 'mihret', id: 445 };
mihret = { username: "kl", id: 343 };
function getDbId(id) {
    // console.log('DB id is: ${id}');
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
}
getDbId(3);
getDbId("3");
//array
var data = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = ['1', '2', '3'];
var data4 = ['1', '2', 3];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
