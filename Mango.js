class Fruit
{
    constructor(x,y)
    {
        var object_options=
        {
            isStatic:true,
            friction: 1
        }
        this.image = loadImage("../Images/mango.png");
        this.body = Bodies.circle(x,y,50,object_options);
        World.add(world,this.body);

    }
    display ()
    {
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }

}