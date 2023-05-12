
//This is a function to takes an infinitive ending in -ere, removes the suffix and produces all of the present conjugations for that verb
const conjugateEre = (infinitive) => {
    const stem = infinitive.slice(0, infinitive.length -3);
    return `Io ${stem}o \nTu ${stem}i \nLui/Lei ${stem}e \nNoi ${stem}iamo \nVoi ${stem}ete \nLoro ${stem}ono`;

}

console.log(conjugateEre('vivere'));