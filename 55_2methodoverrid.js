 //method overriding(differnt class with same method )

class Parent{
    parentbike(){console.log("Passion pro");}
}

class chlid extends Parent{

    parentbike(){console.log("ZX10");}
    
}

var obj=new chlid()
obj.parentbike()