//Topic:The program uses concepts like functions,objects,conditions, and variables updating (like sum)

let marks = { 
    Harry: 90, 
    Shubh: 9, 
    Lovish: 56, 
    Monika: 94
};
function findTopper(marks) {
    let maxMarks = 0;
    let topper = "";

    for (let key in marks) {
        if (marks[key] > maxMarks) {
            maxMarks = marks[key];
            topper = key;
        }
    }

    return topper;
}