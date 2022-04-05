const sentence = "alchemy ROCKS goLD";

function titleCase(sentence) {
  const words = sentence
    .split(" ")
    .map((word) => {
      const letters = word.split("");
      letters[0] = letters[0].toUpperCase();
      for (let i = 1; i < letters.length; i++) {
        letters[i] = letters[i].toLowerCase();
      }
      word = letters.join("");
      return word;
    })
    .join(" ");
  return words;
}

console.log(titleCase(sentence));

const arr = ["a", "b", "c", "d", "e"];
const index1 = 1;
const index2 = -2;

function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    const negIndex = arr.length + index;
    return arr[negIndex];
  }
}

console.log(at(arr, index1));
console.log(at(arr, index2));

const word1 = "superintended";
const word2 = "unpredestined";
const word3 = "pictorialness";
const word4 = "documentarily";

function anagrams(wordOne, wordTwo) {
  wordOne = wordOne.split("").sort().join("");
  wordTwo = wordTwo.split("").sort().join("");

  if (wordOne === wordTwo) {
    return "Anagram";
  } else {
    return "Not an Anagram";
  }
}

console.log(anagrams(word1, word2));
console.log(anagrams(word3, word4));

const arr1 = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]; // 'BbBb'
const arr2 = ["abc", "acb", "bac", "foo", "bca", "cab", "cba"]; // 'foo'

function uniqueString(arr) {
  const set = new Set();
  arr.map((a) => {
    set.add(a);
  });
  return set;
}

console.log(uniqueString(arr1));
console.log(uniqueString(arr2));
