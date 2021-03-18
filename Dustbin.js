class  Dustbin{
    constructor(x,y,width,height){
        var option = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
        this.image=loadImage("dustbingreen.png")
    }
    display(){
        imageMode(CENTER);


      fill(255);

      image(this.image,700,320,100,100);
    }
}