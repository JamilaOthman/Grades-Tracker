'use strict'
var table=document.getElementById('table');

function Student(name,course) {
    this.name=name;
    this.course=course;
    this.grade=Math.floor(Math.random() * (100 - 0) + 0);
    Student.prototype.allStudents.push(this);
    
}
Student.prototype.allStudents=[];

 Student.prototype.allStudents.dispaly= function name() {
      var studentRow=document.createElement('tr')
      table.appendChild('studentRow')

      var nameData=document.createElement('td')
      nameData.textContent=this.name
      studentRow.appendChild('nameData')

      var courseData=document.createElement('td')
      courseData.textContent=this.course
      studentRow.appendChild('courseData')

      var gradeData=document.createElement('td')
      gradeData.textContent=this.grade
      studentRow.appendChild('gradeData')

      
    
}

if(localStorage.getItem(studntsObjects)){
    var lsArray=localStorage.getItem('studntsObjects',JSON.parse('studntsObjects'))

    for (var i = 0; i < lsArray.length; index++) {
         new Student =[lsArray[0].name, lsArray[1].course , lsArray[2].grade]
        
    }
}


var form = document.getElementById('form');
form.addEventListener('submit',addStudent);

function addStudent(event) {

    event.preventDefault();
    var nameV=event.target.name.value;
    var courseV=event.target.course.value;
    var gradeV=event.target.grade.value;
    new Student (nameV,courseV,gradeV);

    localStorage.setItem('studntsObjects', JSON.stringify(Student.prototype.allStudents));
    createTable();
    
}
addStudent();


function createTable() {
    table.innerHTML='';
    createHeader();
    Student.prototype.allStudents.dispaly();

    
}
createTable();

function createHeader() {
    var headerRow=document.createElement('tr')
    table.appendChild('headerRow')

    var nameHeader=document.createElement('th')
    nameHeader.textContent=('Student Name')
    headerRow.appendChild('nameHeader')


    var gradeHeader=document.createElement('th')
    gradeHeader.textContent=('Student Grade')
    headerRow.appendChild('gradeHeader')


    var courseHeader=document.createElement('th')
    courseHeader.textContent=('course')
    headerRow.appendChild('course')
    
}