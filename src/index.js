
function groupAnagrams(strs) {
    const map = {};

    for (let word of words) {
        // Sort the word to use as a key
        const key = word.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    // Return the grouped anagrams as an array of arrays
    return Object.values(map);
}



function sumOfPrimes(n)  {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}



function toTitleCase(input) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


module.exports = { groupAnagrams,  toTitleCase, sumOfPrimes };
