class Paper{
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius=radius

        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }
    display(){
        imageMode(RADIUS);


      fill("yellow");

     image(this.image,this.body.position.x,this.body.position.y,this.radius)
}
}