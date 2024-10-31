//1задание
const reverseArray = (arr) => arr.slice().reverse();
const origArray = ['Student','of','Hillel','IT','school'];
const revArray = reverseArray(origArray);
console.log(revArray);
//2задание
const uniqVal = (arr1, arr2) => arr1.concat(arr2).filter((value, index, array) => array.indexOf(value) === index);
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const uniqArr = uniqVal(arr1, arr2);
console.log(uniqArr); 
//3задание
const calcAvrGrade = (students) => {
    const average = students.map(student => student.grade)
      .reduce((sum, grade) => sum + grade, 0) / students.length;
    return parseFloat(average.toFixed(1));
  };
  const students = [
    { name: "Roman", age: 29, grade: 4.5 },
    { name: "Ruslan", age: 27, grade: 3.9 },
    { name: "Bogdan", age: 25, grade: 4.8 }
  ];
  const avrGrade = calcAvrGrade(students);
  console.log(avrGrade);
  
  