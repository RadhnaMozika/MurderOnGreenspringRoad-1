class Panel{
    constructor(){
        this.panel = createSprite(player.body.x+340, player.body.y, 500, 600);
        this.panel.shapeColor = "white";

        this.victim1 = createSprite(4820, 1600, 50, 20);
            this.victim1.shapeColor=0;
        this.victim2 = createSprite(4820, 1630, 50, 20);
            this.victim2.shapeColor=0;

        this.jonathonPabst = createSprite(3130, 4300, 20, 20);
        this.vernePatterson = createSprite(3180, 4400, 20, 20);
        this.katherineMiriumHegann = createSprite(2600, 3650, 20, 20);
        this.laverneCameron = createSprite(3750, 2650, 20, 20);
        this.dennisHarw = createSprite(1300, 200, 20, 20);


        
//i - six crows lady, 2 - old man, 3 - fisherboy, 4 - outside the walls, approves that this is the correct road
        this.byStander1 = createSprite(3430, 3120, 20, 20);
        this.byStander2 = createSprite(2280, 4200, 20, 20);
        this.byStander3 = createSprite(1140, 2580, 20, 20);
        
        this.byStander4 = createSprite(3640, 5850, 20, 20);
        this.byStander5 = createSprite(6940, 7700, 20, 20);
        
        this.byStander6 = createSprite(8860, 8060, 20, 20);

    }

    movement(){
        this.panel.x = player.body.x+400;
        this.panel.y = player.body.y;
    }

    laverne_Account(){
        textSize(30);
        text("Lady Laverne Cameron", player.body.x+260, player.body.y);
        textSize(25);
        text("Owner of 'Cameron Seafoods'", player.body.x+250, player.body.y+25);     
        textSize(20);
        text("Detective? Oh, yes, yes, very unfortunate...I didn't know ", player.body.x+180, player.body.y+60)
        text("Miss Delagate and Mister Fitzegerald all too well, sorry...", player.body.x+180, player.body.y+80);
        text("Although, Mister Edwin did like fishing, or so, I've heard.", player.body.x+180, player.body.y+110);
        text("My fisher might know something. I think he's docked arou-", player.body.x+180, player.body.y+130);
        text("-nd in Deeplagoon Bay, around Dark Harbour, I believe.", player.body.x+180, player.body.y+150)
        text("Why don't you go and ask him?", player.body.x+270, player.body.y+200)
        text("Farewell!", player.body.x+360, player.body.y+240)
    }

    jonathon_Account(){
        textSize(30);
        text("Jonathon Pabst", player.body.x+300, player.body.y);
        textSize(25);
        text("Owner and Worker at 'Pabst Florists'", player.body.x+205, player.body.y+25); 
        textSize(20);
        text("'Ah, yes, Mildred and Edwin, I'm quite familiar, met them ", player.body.x+180, player.body.y+60)
        text("one too many times down in Dawnice Keep. I am afraid I ", player.body.x+180, player.body.y+80)
        text("know nothing of any...vindications they may have deve-", player.body.x+180, player.body.y+100)
        text("loped, or anything about the night of the incident, no...", player.body.x+180, player.body.y+120)

        text("'Let me know if there's anything else I can do for you. Oh,", player.body.x+180, player.body.y+150)
        text("and also, be sure to join me at the Dairy Steps in Dawnice ", 
        player.body.x+180, player.body.y+170)
        text("once in a while, Detective!", player.body.x+180, player.body.y+190)
        text("'Farewell'", player.body.x+365, player.body.y+230)
        
    }
    verne_Account(){
        textSize(30);
        text("Verne Patterson", player.body.x+300, player.body.y);
        textSize(25);
        text("Owner of 'Patterson Jewelers'", player.body.x+255, player.body.y+25);     
    }
    katherine_Account(){
        textSize(30);
        text("Katherine Mirium Heganns", player.body.x+240, player.body.y);
        textSize(25);
        text("Worker at Hegann Breweries", player.body.x+255, player.body.y+25);     
    }
    dennis_Account(){
        textSize(30);
        text("Dennis Cameron", player.body.x+300, player.body.y);
        textSize(25);
        text("Fisherman for 'Cameron Seafoods'", player.body.x+235, player.body.y+25);     
    }
    Account1(){
        textSize(30);
        text("Sir Jenkins Walter", player.body.x+300, player.body.y);
        textSize(20);
        text("'Ehh...Pearl Castle has been shut down...I'll send a request", player.body.x+180, player.body.y+40);
        text("to the observatory, don't worry- Huh? Upper District?", player.body.x+180, player.body.y+60)
        text("'Upper District is just down the road, Dark Harbour", player.body.x+180, player.body.y+90);
        text(" is to the west, just after Light Village, Greenspring is", player.body.x+180, player.body.y+110);
        text("to the east, just go down Six Courts Street, for about 20", player.body.x+180, player.body.y+130)
        text("minutes you'll reach Old Pair at Dawnice- huh? That ", player.body.x+180, player.body.y+150);
        text("is all you wanted to know? Okay, go on, then, off", player.body.x+180, player.body.y+170);
        text("you go, Pearl Caste is closed, endless work today.'", player.body.x+180, player.body.y+190);
        
    }
    Account2(){
        textSize(30);
        text("Miss Ira Julienne Shapter", player.body.x+250, player.body.y);
        textSize(20);
        text("'Dawnice Keep? You'll need to go out the walls...I don't", player.body.x+180, player.body.y+30);
        text("really know...Its quite a long way...", player.body.x+180, player.body.y+50);
        text("'Maybe rent a carriage?", player.body.x+180, player.body.y+80);
        text("'Oh...wait..hmm....carriages are disbanded because of the", player.body.x+180, player.body.y+100)
        text("incident near Greenspring Road...Take the road from ", player.body.x+180, player.body.y+120)
        text("Six Crows, okay? Even if you manage to get past", player.body.x+180, player.body.y+140);
        text("Greenspring, the road is a dead end.", player.body.x+180, player.body.y+160)
        text("'Okay? Oh, uh- Goodbye, then.'", player.body.x+280, player.body.y+220);
    }

    Account3(){
        textSize(30);
        text("Kit Henry Peter-Smith", player.body.x+260, player.body.y)
        textSize(20);
        text("The fisher for Cameron's? He docks outside the walls,", player.body.x+180, player.body.y+40)
        text("try steppin' out from Greenspring Street. He's just", player.body.x+180, player.body.y+60)
        text("at the north edge, you're sure to spot him once you", player.body.x+180, player.body.y+80)
        text("get out of the walls.", player.body.x+180, player.body.y+100)
        text("GoodBye", player.body.x+360, player.body.y+230) 
    }
    Account4(){
        textSize(30);
        text("Mister Gerard Plankton", player.body.x+260, player.body.y)
        textSize(20);
        text("'Dawnice is down the road, but it'll be a long way to get ", player.body.x+180, player.body.y+40)
        text("there. Don't stray off.'", player.body.x+180, player.body.y+60)
    }
    Account5(){
        textSize(30);
        text("Peter Hugh", player.body.x+340, player.body.y)
        textSize(20);
        text("'The Murder at Greenspring? Bert may know something, ", player.body.x+180, player.body.y+40)
        text("just go east to the caste, he's a musician there.'", player.body.x+180, player.body.y+60)
        text("Good Luck", player.body.x+350, player.body.y+220)
    }

    Account6(){
        this.state = 0;
        textSize(30);
        text("Bert", player.body.x+360, player.body.y)
        textSize(20);
        if(this.state === 0){
            text("'The Murder at Greenspring? Oh, that Delagate girl...?", player.body.x+180, player.body.y+40)
            text("Mildred and Edwin were frequent visitors of Dawnice.", player.body.x+180, player.body.y+60)
            text("usually North District, they were rich folk...look, you", player.body.x+180, player.body.y+80)
            text(" didn't hear it from me, but there's this...this one who ", player.body.x+180, player.body.y+100)
            text("comes in from Upper District..He runs a store up ", player.body.x+180, player.body.y+120)
            text( "there, I'm not sure which, but...He often got into big", player.body.x+180, player.body.y+140)
            text("fights with Fitzegerald...he comes in every Friday...", player.body.x+180, player.body.y+160)
            text("...I think I saw him at Dairy Steps now. Be...careful", player.body.x+180, player.body.y+180)
            text("Goodbye,", player.body.x+350, player.body.y+220)
        }
    
        
        
    }

    



    write(){
       
        
        fill(0);
        textSize(15);
        strokeWeight(1);
        stroke(255);
        textFont("Garamond");
        text("Mildred Delegate", 4785, 1585);
        text("Edwin Fitzegerald", 4780, 1620);

        text("Jonathon Pabst", this.jonathonPabst.x-45, this.jonathonPabst.y-20)
        text("Verne Patterson", this.vernePatterson.x-50, this.vernePatterson.y-20)
        text("Katherine Mirium Hegann", this.katherineMiriumHegann.x-60, 
        this.katherineMiriumHegann.y-20);
        text("Lady Laverne Cameron", this.laverneCameron.x-50, 
        this.laverneCameron.y-20)
        text("Dennis Harw", this.dennisHarw.x-40, this.dennisHarw.y-20);

        textSize(30);
        noStroke();
        text("Pabst Florists", 2920, 4350);
        text("Patterson Jewelers", 3120, 4000)
        text("Hegann Breweries", 2520, 3450);
        text("Cameron Seafoods", 3810, 2720);
    

    }
}

