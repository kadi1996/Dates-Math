// console.log("text");


// lev 1.1
// let date1 = new Date("September 2, 2019 09:00:00");
// let date2 = new Date(0);
// let date3 = new Date(31556908800);
// let date4 = new Date(86400000);

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);


// Lev 1.2

// let monate = [
//     "Januar",
//     "Februar",
//     "März",
//     "April",
//     "Mai",
//     "Juni",
//     "Juli",
//     "August",
//     "September",
//     "Oktober",
//     "November",
//     "Dezember"
// ];

// let wochenTag = [
//     "Sonntag",
//     "Montag",
//     "Dienstag",
//     "Mittwoch",
//     "Donnerstag",
//     "Freitag",
//     "Samstag"
// ];

// let date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());

// console.log(wochenTag[date.getDay()]);
// console.log(monate[date.getMonth()]);

// LEV 1.3

// let date2 = new Date();
// console.log(date2);

// date2.setFullYear(2222);
// date2.setMonth(9);
// date2.setDate(23);
// date2.setHours(13);
// date2.setMinutes(25);
// date2.setSeconds(11);

// console.log(date2);

// date2.setFullYear(2123);
// date2.setMonth(9);
// date2.setDate(23);
// date2.setHours(13);
// date2.setMinutes(25);
// date2.setSeconds(11);

// console.log(date2);

// date2.setDate(date2.getDate() + 30);
// console.log(date2);


// Level 1.4

let tageImMonat = (month, year) => {
    let date = new Date(month, year);
    return date.getDate();
}

console.log(tageImMonat(1, 2016));