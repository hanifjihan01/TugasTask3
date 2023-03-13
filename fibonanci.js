function fibonanci(numbers){
    let fibonance = [];
    for (let i = 0; i < numbers; i++){
        if (i=== 0 || i ===1) fibonance.push(i);

        if(i > 1) fibonance[i] = fibonance[i - 1] + fibonance [i - 2];
    }
    return fibonance.join(",");
}

console.log(fibonanci(7));