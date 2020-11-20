class marble {
    constructor(x, y) {
      var marbleoptions = {
        'isStatic': false,
        'restitution': 1,
        'friction': 0,
        'frictionAir': 0,
        'slop': 1,
        'inertia': Infinity
      }
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.body = Bodies.circle(x, y,this.radius, marbleoptions);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      strokeWeight(4)
      stroke("crimson")
      fill("gold");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };