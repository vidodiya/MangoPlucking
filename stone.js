class Stone{
    constructor(x,y,r)
    {
        var options ={
            //isStatic:true,
            restitution:0.8,
            friction:0.6,
            density:0.5
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
       // console.log("x"+pos.x)
       // console.log("y"+pos.y)
    }
}