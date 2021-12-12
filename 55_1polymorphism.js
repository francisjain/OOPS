//polymorphism many forms (more than one form)
    //method overloading(same method but diff: parameter but js dont support it due to "...-spread operator")
    //method overriding(differnt class with same method )

    class MyMaths{
        add(){console.log("first")}
        add(n1,n2){console.log("Second")}
        add(n1,n2,n3){console.log("Third")}

        // add(...args){
        //     console.log("Spred op"); 
        // }


    }

    var obj=new MyMaths()
    obj.add()
    obj.add(10,20)
    obj.add(10,20,30)
    