class Bob {

    constructor(x,y,r){

        var options={
            restitution :1,
            density :1.6,
            friction:0,
            isStatic :false
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        //this.image = loadImage("Images/bobby.png");
        this.radius = r;

    }

    display() {

        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }

}