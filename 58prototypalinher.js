var parent={
    name:"jain",
    getName(){console.log(this.name);},
    roll:71,
    class:"XII"
}
var child={
    name:"francis",
    roll:61

}
child.__proto__=parent
console.log(child.class);
console.log(child.__proto__);