const cypher = {
    '0':'O',
    '1':'I',
    '2':'Z',
    '3':'E',
    '4':'h',
    '5':'S',
    '6':'G',
    '7':'L',
    '8':'B',
    '9':'q',
    'O':'0',
    'I':'1',
    'Z':'2',
    'E':'3',
    'h':'4',
    'S':'5',
    'G':'6',
    'L':'7',
    'B':'8',
    'q':'9'
}


// Day 2 input
const key = ['S','p','a','c','e']

// function final(str){
//     const day1and2 = str.split('').map(x=>
//         cypher[x] || x
//         ).join('').slice(str.indexOf('c')).replaceAll('Eek!', '').split('').reverse().join('').split('v').join('')
//     for (let i = 0; i < day1and2.length;i++){
//         for (let j = 0; j < key.length;j++){
//             day1and2[i] == key[j] ? day1and2[i] = ' ' : null
//         }
//     }
//     return day1and2.split('').reverse().join('')
// }

// console.log(final("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))
// const finalAnswer = 'cbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOi#yl4gmQfs'


// Day 2 and Day 5 were side-projects, and their real purpose was to provide you with inputs for this final decoding. Day 2's key characters and Day 5's final count will be used as arguments for Day 3 and Day 6's functions, respectively.

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 5 input
const day5FinalCount = 3

function replaceSpace(str) {
    const splitStr = str.split('')
    for (let i = 0; i < splitStr.length;i++){
        for (let j = 0; j < key.length;j++){
            splitStr[i] == key[j] ? splitStr[i] = ' ' : null
        }
    }
    return splitStr.join('')
}

function day6(str, num){
    return str.split('').filter((x,y)=>(y+1) % num !==0).join('')
}

function hiddenMessage(str){
    return str.split('').map(x=>
        cypher[x] || x
        ).join('')
}

const answerOne = hiddenMessage(encryptedMsg)

console.log(answerOne)

const answerTwo = replaceSpace(answerOne)

console.log(answerTwo)

const answerThree = day6(answerTwo,day5FinalCount)

console.log(answerThree)

console.log(replaceSpace(day6(hiddenMessage(encryptedMsg), day5FinalCount)))