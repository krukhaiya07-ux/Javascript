//Topic:The program uses concepts like functions,objects,conditions, and variables updating (like sum)

let marks = { 
    Harry: 90, 
    Shubh: 9, 
    Lovish: 56, 
    Monika: 94
};

function findLowestScorer(marks) {
    let keys = Object.keys(marks);
    let lowestMarks = marks[keys[0]];
    let lowscorer = keys[0];

    for (let key in marks) {
        if (marks[key] < lowestMarks){
            lowestMarks = marks[key];
            lowscorer = key;
        }
    }

    return lowscorer;
}




