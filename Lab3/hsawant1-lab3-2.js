function countVowels (str) {
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
};

console.log(`Cristiano: ${countVowels('Cristiano')} vowels`);
console.log(`Ronaldo: ${countVowels('Ronaldo')} vowels`);
console.log(`Bruno: ${countVowels('Bruno')} vowels`);