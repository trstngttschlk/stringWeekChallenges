function day6(str, num){
    return str.split('').filter((x,y)=>(y+1) % num !==0).join('')
}

console.log(day6("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!",4))
console.log(day6("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.",5))