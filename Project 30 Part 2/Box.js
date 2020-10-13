class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      console.log(this.body.speed);
      if(this.body.speed<3){
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();    
      }
      else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility-10;
          tint(0, this.Visibility);
          pop();
      }
    }
    score(){
      if(this.visibility < 0 && this.visibility >= 105){
        score++;
      }
    }
  };
  