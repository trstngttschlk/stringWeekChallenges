let puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

puns = puns.split(',')

// remove puns with ' ' at beginning or end
puns = puns.filter(x=>x[0] !== ' ').filter(x=>x[x.length-1] !== ' ')
// remove puns containing 'dog', 'bark', or 'bone'
puns = puns.filter(x=>!x.toLowerCase().includes('dog'))
puns = puns.filter(x=>!x.toLowerCase().includes('bark'))
puns = puns.filter(x=>!x.toLowerCase().includes('bone'))
// length of pun cannot be multiple of 5
puns = puns.filter(x=>x.length % 5 !==0)
// sum of charCodes of the 1st and last characters must be odd
puns = puns.filter(x=>(x.charCodeAt(0) + x.charCodeAt(x.length-1)) % 2 !== 0)
// character directly after middle !== 'e'
function findHalfPlusOne(str){
    if (str.length % 2 == 0){
        return str.length/2 + 1
    }
    return Math.ceil(str.length/2)
}
puns = puns.filter(x=>x.charAt(findHalfPlusOne(x)) !== 'e')
// must have an even number of lower case letters
function countLower(str){
    str = str.split('')
    lowerCount = 0
    for (let i = 0; i<str.length;i++){
        str[i] === str[i].toLowerCase() && 
        str[i] !== ' ' &&
        str[i] !== "'" &&
        str[i] !== '&'
        ? lowerCount++ : null
    }
    return lowerCount
}
puns = puns.filter(pun=>countLower(pun) % 2 == 0)
// must have at least 2 uppercase letters
function countUpper(str){
    str = str.split('')
    upperCount = 0
    for (let i = 0; i<str.length;i++){
        str[i] === str[i].toUpperCase() && 
        str[i] !== ' ' &&
        str[i] !== "'" &&
        str[i] !== '&'
        ? upperCount++ : null
    }
    return upperCount
}
puns = puns.filter(pun=>countUpper(pun) >= 2)
// must not contain "S"
puns = puns.filter(pun=>!pun.includes('S'))

console.log(puns)
console.log(puns.length)

// let words = [  'Mew Peter',
// 'Pets and the Kitty',
// 'The Meowpet Show',
// 'The Pawffice',
// 'The Pawnight Show',
// 'Teenage Mewtant Ninja Turtles',
// 'Paw Trek',
// 'The Purrlight Zone',
// 'Meowter Call Saul',
// 'Rick & Meowty',
// "Mewster Rogers' Neighborhood"]
// words = words.map(x=>countUpper(x))
// console.log(words)

// function findMiddlePlus1(str){
//     return str.charAt((Math.ceil(str.length))/2)
// }

// function findHalf(num){
//     return Math.ceil(num/2)
// }

// console.log(findHalf(5))
// console.log(findHalf(6))

// // console.log(findMiddlePlus1('Teenage Mewtant Ninja Turtles'))
// console.log(findMiddlePlus1('center'))
// console.log(findMiddlePlus1('weird'))