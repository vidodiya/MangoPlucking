class Tree{
    constructor(x,y,width,height)
    {
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
       // this.x = x;
       // this.y = y;
        this.width =  width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
        
    }
    display()
    {
        var posx = this.body.position;
        imageMode(CENTER);
        image(this.image,posx.x,posx.y,this.width,this.height);
    }
}