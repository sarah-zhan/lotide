const head = require('../head');
const assertEqual = require('/home/labber/lighthouse/lotide/assertEqual.js');;

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2]), 2);
assertEqual(head([]), 0);