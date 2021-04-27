#!/usr/bin/env npx ts-node

const fetcher = require("node-fetch");

// Main CLI file...

let args = process.argv.slice(2);

console.log(args);

let url: string = args[0];
let numberArray: number[] = JSON.parse(args[1]);

fetcher(url + "odd-positive-average", {
    method: 'POST',
    body: JSON.stringify(numberArray),
    headers: {
        "Content-Type": "application/json"
    }
})
    .then((response) => {
        if (response.status == 200 || response.status == 400){
            return response.json();
        } else {
            console.log("Didn't recieve either a 200 or 400 status code")
        }
    })
    .then((data) => {
        console.log(data);
    })