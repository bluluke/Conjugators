

//This is a function to takes an infinitive, removes the suffix and produces all of the present conjugations for that verb
const conjugateAre = (infinitive) => {
    const stem = infinitive.slice(0, infinitive.length -3);
    return `Io ${stem}o \nTu ${stem}i \nLui/Lei ${stem}a \nNoi ${stem}iamo \nVoi ${stem}ate \nLoro ${stem}ano`;

}

export {conjugateAre};