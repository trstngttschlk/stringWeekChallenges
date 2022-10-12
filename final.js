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

// Day 5 input
const day5FinalCount = 3
// encrypted message needs to be decoded
const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 1 Function
function day1(str){
    return str.split('').map(x=>
        cypher[x] || x
        ).join('')
}

day1Answer = day1(encryptedMsg)

// Day 3 Function
function day3(str) {
    const splitStr = str.split('')
    for (let i = 0; i < splitStr.length;i++){
        for (let j = 0; j < key.length;j++){
            splitStr[i] == key[j] ? splitStr[i] = ' ' : null
        }
    }
    return splitStr.join('')
}

day3Answer = day3(day1Answer) // !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs

// Day 4 Function
function day4(str){
    return str.split('').reverse().join('')
}

day4Answer = day4(day3Answer) // sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! 

// Day 6 Function
function day6(str, num){
    return str.split('').filter((x,y)=>(y+1) % num !==0).join('')
}

day6Answer = day6(day4Answer, day5FinalCount) // sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!

// Day 7 Function

// console.log(replaceSpace(day6(hiddenMessage(encryptedMsg), day5FinalCount)))