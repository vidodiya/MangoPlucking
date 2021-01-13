class Elastic{
    constructor(pointA,bodyB)
    {
        var options={
            pointA:pointA,
            bodyB:bodyB,
            length:1,
            stiffness:0.009
        }
        this.pointA = pointA;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        //console.log(this.chain)
    }
    attach()
    {
       // console.log(this.chain);
        this.chain.bodyB = stone.body;
       
        
    }
    fly()
    {
        this.chain.bodyB =null;
        //this.chain.bodyA.isStatic=false;
    }
   display()
    {
        if(this.chain.bodyB)
        {
        var posB = this.chain.bodyB.position;
        var posA = this.pointA;
        line(posA.x,posA.y,posB.x,posB.y);
        }
    } 
}