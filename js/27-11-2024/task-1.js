let letter = "Hey How are you ?"
let vowls = 'aeiouAEIOU'
let count = 0;
for (let i = 0; i < letter.length;i++) {
    if (vowls.includes(letter[i])) {
        count++;
    }
}
console.log("No.of vowels is: " + count);
