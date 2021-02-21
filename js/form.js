class Form {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.reset = createButton('Reset')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(displayWidth/2, 30);
      
      this.input.position(displayWidth/2-10, displayHeight/2-30);
      this.button.position(displayWidth/2+50, displayHeight/2);
      this.reset.position(displayWidth-100,50)
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount
        player.update()
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2+50, 200)
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0)
        game.update(0)
      })
    }
}