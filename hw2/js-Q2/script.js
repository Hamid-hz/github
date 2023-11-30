function typechecker (array) {
    let result= '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
      if(Array.isArray(element)===true){
       result += 'array,';
    } else{
        result += typeof element + ',';
    }


}
let array = [53,'alex', 6, true, [1,2]];
console.log(typechecker(array));