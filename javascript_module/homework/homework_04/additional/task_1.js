function longestWord(string) {
    let splitString = string.split(" ");
    let orderedArray = splitString.sort((a, b) => b.length - a.length)
    let longestWord = orderedArray[0]
    return longestWord
  }
  
longestWord("I love to study JavaScript");