class Student{
    setStudent(rol,course,total){
        this.rol=rol,
        this.course=course,
        this.total=total
    }
    getStudent(){
        console.log(this.rol,this.course,this.total);       
    }
}

var obj = new Student()
obj.setStudent(1,"PHP",2000)
obj.getStudent()

var obj1 = new Student()
obj1.setStudent(2,"MEARN",4000)
obj1.getStudent()