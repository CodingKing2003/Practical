class Student {
  constructor(student_name, roll_no, age, branch) {
    this.Student_name = student_name;
    this.roll_no = roll_no;
    this.age = age;
    this.branch = branch;
  }

  display() {
    console.log(`Student Name: ${this.Student_name}`);
    console.log(`Roll No: ${this.roll_no}`);
    console.log(`Age: ${this.age}`);
    console.log(`Branch: ${this.branch}`);
  }
}

// Creating instances of Student class
let student1 = new Student("John Doe", "001", 20, "Computer Science");
let student2 = new Student("Jane Smith", "002", 21, "Electrical Engineering");

// Displaying details of the two students
console.log("Details of Student 1:");
student1.display();

console.log("\nDetails of Student 2:");
student2.display();
