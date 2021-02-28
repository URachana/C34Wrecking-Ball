class Rope{

    constructor(body1,ptB){
        
        
        var options={
            bodyA: body1,
            
            pointB: ptB,
            length:400,
            stiffness: 0.6
            
        }
        this.rope= Constraint.create(options);
        World.add(world,this.rope);
        this.pointB=ptB;
    }
     
    display(){

        var ptA= this.rope.bodyA.position;
        
        var ptB = this.pointB;
        
        strokeWeight(4);
       
        line(ptA.x,ptA.y,ptB.x,ptB.y);
    }




}