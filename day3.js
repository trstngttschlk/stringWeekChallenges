const key = ['A','_','K','E','Y','!']

// 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

function replaceSpace(str) {
    const splitStr = str.split('')
    for (let i = 0; i < splitStr.length;i++){
        for (let j = 0; j < key.length;j++){
            splitStr[i] == key[j] ? splitStr[i] = ' ' : null
        }
    }
    return splitStr.join('')

}

console.log(replaceSpace('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'))