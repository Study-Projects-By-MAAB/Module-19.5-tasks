// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person'
splited = statement.split(' ')
// console.log(splited);
let box = []
let final = ''
for (obj of splited) {
    // console.log(obj);
    box.unshift(obj)
    final = box.join(' ')
}
console.log(final);