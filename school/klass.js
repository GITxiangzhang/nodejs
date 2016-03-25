var student=require("/.student");
var teacher=require("/.teacher");
teacher.add("zx");
function add(studens,teachername){
    teacher.add(teachername);
    studens.forEach(function(items,index){
     student.add(items);
    })
}
exports.add=add;