class Ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            friction:1,
            density:1.2,
            restitution:0
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display()
    {
        var groundpos=this.body.position;

        push();
        translate(groundpos.x,groundpos.y);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.w,this.h);
        pop();
    }
}