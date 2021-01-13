class Tree{
    constructor(x,y,width,height)
    {
        this.body = Bodies.rectangle(x,y,width-300,height-300,{isStatic:true});
       // this.x = x;
       // this.y = y;
        this.width =  width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
        
    }
    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        //rect(pos.x,pos.y,this.width,this.height);
    }
}