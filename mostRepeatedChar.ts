function mostRepeatedChar(s: string[]): string | null  {

    //track highest char
    let highestchar: string | null = null;

    //track highestcount
    let highestcount: number = 0

    // define character dict as a hashmap with string keys and the value count 
    const characterDict: { [key: string]: number } = {};


    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if(!(/[a-zA-Z]/.test(char))) continue

        characterDict[char] = (characterDict[char] || 0) + 1

        if(characterDict[char] > highestcount){
            highestcount = characterDict[char]
            highestchar = char
        }
    }


    // return highest char
    return highestchar
}

// Example function to test mostRepeatedChar
function testMostRepeatedChar() {
    const testString = "aabbbccde";
    const result = mostRepeatedChar(testString.split(''));
    console.log(`The most repeated character in "${testString}" is "${result}"`);
}

testMostRepeatedChar();