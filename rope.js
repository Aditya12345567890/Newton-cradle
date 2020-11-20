class rope{
    constructor(bodyA,pointB){
       var options = {
        'bodyA' : bodyA,
        'pointB' : pointB,
        'stiffness' : 1,
        'angularStiffness' : 1,
        'length' : 220
       }
   this.pointB = pointB;
   this.chain = Constraint.create(options)
   World.add(world, this.chain)
    }
   
   display(){
       push();
       fill(0)
       strokeWeight(5)
       stroke("lightcoral")
       if(this.chain.bodyA){
           var pointA = this.chain.bodyA.position;
           var pointB = this.pointB;
           line(pointA.x,pointA.y,pointB.x,pointB.y)   
       }
       pop();
   
   }
   }