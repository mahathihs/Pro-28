class Man{
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            length:1,
            stiffness:0.004
        }
        this.image=loadImage("images/boy.png");
        this.pointB=anchor;
        this.bodyA=body;
        this.man=Constraint.create(options);
        World.add(world,this.man);
    }
    attach(body){
        this.man.bodyA=body;
    }

    fly()
    {
        this.man.bodyA=null;
    }

    display()
    {
        if(this.man.bodyA){
            var pointA=this.bodyA.position;
            var pointB=this.pointB;

            strokeWeight(2);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
         }
    }
}