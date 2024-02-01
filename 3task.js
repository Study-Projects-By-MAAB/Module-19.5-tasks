// Use a for...of loop to concatenate all the elements of an array into a single string.

var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

let concatedString = ''
for (elem of numbers) {
    concatedString = concatedString + elem
}
console.log(concatedString);