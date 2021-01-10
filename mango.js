class Mango{
    constructor(x,y,r)
    {
        var options ={
            isStatic:true,
            frcition:1,
            restitution:0
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}