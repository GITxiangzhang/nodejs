var student=require('./student');
var teacher=require('./teacher');
function add(teachername,students){
    teacher.add(teachername);
    students.forEach(function(items,index){
     student.add(items);
    })
}
exports.add=add;