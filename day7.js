const alphabet = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
]

const testStr = 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'

function makeOppositeCase(str){
    return str.split('').map(x=>{
        if (x == x.toUpperCase()){
            return x = x.toLowerCase()
            }
            return x = x.toUpperCase()   
        }
    ).join('')
}

const oppositeCase = makeOppositeCase(testStr)

// function makeOppositeLetter(str) {
//     const splitStr = str.split('')
//     for (let i = 0; i < splitStr.length;i++){
//         for (let j = 0; j < alphabet.length;j++){
//             console.log(splitStr[i], alphabet[j])
//             splitStr[i] == alphabet[j] ? splitStr[i] = alphabet[alphabet.length-alphabet.indexOf(alphabet[j])-1] : null
//         }
//     }
//     return splitStr.join('')
// }


console.log(oppositeCase)
// console.log(makeOppositeLetter(oppositeCase))