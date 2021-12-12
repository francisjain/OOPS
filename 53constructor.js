class Student{
    constructor(rol,course,total){     //constructor used to initilise the instance variable
        this.rol=rol,
        this.course=course,
        this.total=total
    }
    getStudent(){
        console.log(this.rol,this.course,this.total);       
    }
}

var obj = new Student(1,"PHP",2000)
obj.getStudent()

var obj1 = new Student(2,"MEARN",4000)
obj1.getStudent()