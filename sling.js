class Sling{
constructor(bodyA,pointB){
var options = {
bodyA:bodyA , 
pointB:pointB , 
stiffness:0.05 , 
length:10
}
this.pointB = pointB
this.chain = Constraint.create(options)
World.add(world,this.chain)
}
launch(){
this.chain.bodyA = null
}

display(){
if(this.chain.bodyA){
var pointA = this.chain.bodyA.position
var pointB = this.pointB
strokeWeight(5)
stroke("white")
line(pointA.x , pointB.y , pointB.x , pointB.y)
}
}
}
