class Bob {
    constructor(x,y,r)
	{
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, r)
		World.add(world, this.body);
		

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
