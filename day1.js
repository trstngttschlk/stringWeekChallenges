// https://blog.barbaralaw.me/huntober-2022-day-1

// '0':'O'
// '1':'I'
// '2':'Z'
// '3':'E'
// '4':'h'
// '5':'S'
// '6':'G' 
// '7':'L'
// '8':'B'
// '9':'q'

// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."

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

function hiddenMessage(str){
    return str.split('').map(x=>
        cypher[x] || x
        ).join('')
}

console.log(hiddenMessage("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))