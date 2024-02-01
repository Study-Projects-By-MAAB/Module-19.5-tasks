// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let reversed = [];
for (i = colors.length - 1; i >= 0; i--) {
    reversed.push(colors[i])
}
console.log(reversed);