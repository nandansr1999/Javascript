const students = [
  {
    id: 1,
    name: 'Alice',
    subjects: [
      { name: 'Math', score: 85 },
      { name: 'English', score: 78 }
    ]
  },
  {
    id: 2,
    name: 'Bob',
    subjects: [
      { name: 'Math', score: 65 },
      { name: 'English', score: 90 }
    ]
  },
  {
    id: 3,
    name: 'Charlie',
    subjects: [
      { name: 'Math', score: 92 },
      { name: 'English', score: 88 }
    ]
  },
  {
    id: 4,
    name: 'Diana',
    subjects: [
      { name: 'Math', score: 74 },
      { name: 'English', score: 82 },
      { name: 'Science', score: 91 }
    ]
  },
  {
    id: 5,
    name: 'Ethan',
    subjects: [
      { name: 'Math', score: 88 },
      { name: 'English', score: 76 },
      { name: 'History', score: 85 }
    ]
  }
];

//First
const studentsMathAbove80 = students
  .filter(student => student.subjects.some(subject => subject.name === 'Math' && subject.score > 80))
  .map(student => student.name);

console.log(studentsMathAbove80);
//Second
const studentsWithAverageScore = students.map(student => {
  const totalScore = student.subjects.reduce((sum, subject) => sum + subject.score, 0);
  const averageScore = totalScore / student.subjects.length;
  return { name: student.name, averageScore };
});

console.log(studentsWithAverageScore);

// Third
const totalMathScore = students.reduce((sum, student) => {
  const mathScore = student.subjects.find(subject => subject.name === 'Math').score;
  return sum + mathScore;
}, 0);
const totalMathAvg = totalMathScore / students.length;

console.log( totalMathAvg);

// fourth
const studentsInMathAndEnglishAbove80 = students.filter(student => {
  const mathScore = student.subjects.find(subject => subject.name === 'Math').score;
  const englishScore = student.subjects.find(subject => subject.name === 'English').score;
  return mathScore > 80 && englishScore > 80;
}).map(student => student.name);

console.log( studentsInMathAndEnglishAbove80);
