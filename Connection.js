class Attach
{
    constructor(b,p)
    {
        var constraint_Options =
        {
            bodyA:b,
            pointB:p,
            stiffness:0.004,
            length:0
        }
        this.attach = Constraint.create(constraint_Options);
        World.add(world,this.attach);
    }
    
   
    
    display()
    {
        if (this.attach.bodyA!=null)
        {
        var bodyA = this.attach.bodyA.position;
            var pointB = this.attach.pointB;
        line (bodyA.x,bodyA.y,pointB.x,pointB.y);
        }
    }

    fly()
    {
     this.attach.bodyA = null;
    }

}
