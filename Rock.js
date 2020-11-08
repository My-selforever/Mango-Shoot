class Stone
{
    constructor()
    {
        var rock_Options = 
        {
            isStatic: false,
            friction:1,
            density: 1.2
        }
           this.body = Bodies.rectangle(90,470,50,50,rock_Options);
           World.add(world,this.body);
           this.image = loadImage("../Images/stone.png");
    }
    display ()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop()
    }

}