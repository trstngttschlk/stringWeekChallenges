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
}
const key = ['A','_','K','E','Y','!']

function final(str){
    const day1and2 = str.split('').map(x=>
        cypher[x] || x
        ).join('').slice(str.indexOf('c')).replaceAll('Eek!', '').split('').reverse().join('').split('v').join('')
    for (let i = 0; i < day1and2.length;i++){
        for (let j = 0; j < key.length;j++){
            day1and2[i] == key[j] ? day1and2[i] = ' ' : null
        }
    }
    return day1and2.split('').reverse().join('')
}

console.log(final("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))