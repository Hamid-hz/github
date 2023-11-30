function multiplayer (num , num2) {
    let arr = [];

    for (let i = 0; i < num2; i++){
        arr.push(num * (i+1))
    }
    return arr;
}
console.log(multiplayer(7,5));