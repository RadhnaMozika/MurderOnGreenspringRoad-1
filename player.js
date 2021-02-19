class Player{
    constructor(){
        this.body = createSprite(3750, 2650, 20, 20);
    }

    move(){
        if(keyDown("up")){
            this.body.y = this.body.y-20;
        }
        if(keyDown("down")){
            this.body.y = this.body.y+20;
        }
        if(keyDown("left")){
            this.body.x = this.body.x-20;
        }
        if(keyDown("right")){
            this.body.x = this.body.x+20;
        }

        camera.x = this.body.x;
        camera.y = this.body.y;

    }





}