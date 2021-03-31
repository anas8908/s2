var timr,timeIMG;

function preload() {
    timeIMG = loadImage("tm.png")
}

function setup() {
    createCanvas(displayWidth,displayHeight);

    time = createSprite(displayWidth /3.5,displayHeight /2.2);
    time.addAnimation("tm",timeIMG);
    time.scale = 0.55
}

function draw() {
    background(173,216,230);

    text("Hello teacher,",displayWidth - 1200, displayHeight-600);

    this.button = createButton('Give homework');
    this.button2 = createButton('Publish mark');

    this.button.position(displayWidth - 1150,displayHeight / 1.35);
    this.button2.position(displayWidth - 850,displayHeight / 1.35);

    this.button.mousePressed(()=>{

        this.input = createInput("Class")
        this.input2 = createInput("Subject")
        this.input3 = createInput("Homework")
        this.greeting = createElement('h2')
        this.SButton = createButton("Submit")
        //this.Sgreeting.hide();

        this.greeting.html("Student homework")
        this.greeting.position(displayWidth/1 - 500, displayHeight/4)

        this.input.position(displayWidth/1 - 500,displayHeight / 2.7)
        this.input2.position(displayWidth/1 - 500,displayHeight / 2.4)
        this.input3.position(displayWidth/1 - 500,displayHeight / 2.15)
        this.SButton.position(displayWidth/1 - 450,displayHeight / 1.90)

        this.SButton.mousePressed(()=>{
            this.greeting.hide();
            this.input.hide();
            this.input2.hide();
            this.input3.hide();
            this.SButton.hide();
            this.button.hide();

            this.Sgreeting = createElement('h2')
            this.Sgreeting.html("Homework assigned");
            this.Sgreeting.position(displayWidth/1 - 500, displayHeight/4)
            

        });


        

        
      });

      this.button2.mousePressed(()=>{
          this.Mgreet = createElement('h2');
          this.Mgreet.html("Publish marks")
          this.Mgreet.position(displayWidth/1 - 500, displayHeight/4)

          this.Minput = createInput("Class")
          this.Minput2 = createInput("Student roll no")
          this.Minput3 = createInput("Exam")
          this.Minput4 = createInput("Subject")
          this.Minput5 = createInput("Mark")
          this.Minput6 = createInput("Comments")
          this.Mbutton = createButton("Submit")

          this.Minput.position(displayWidth/1 - 500,displayHeight / 2.7)
          this.Minput2.position(displayWidth/1 - 500,displayHeight / 2.4)
          this.Minput3.position(displayWidth/1 - 500,displayHeight / 2.15)
          this.Minput4.position(displayWidth/1 - 500,displayHeight / 1.95)
          this.Minput5.position(displayWidth/1 - 500,displayHeight / 1.78)
          this.Minput6.position(displayWidth/1 - 500,displayHeight / 1.64)
          this.Mbutton.position(displayWidth/1 - 450,displayHeight / 1.52)

          this.Mbutton.mousePressed(()=>{
            this.Mgreet.hide();
            this.Minput.hide();
            this.Minput2.hide();
            this.Minput3.hide();
            this.Minput4.hide();
            this.Minput5.hide();
            this.Minput6.hide();
            this.Mbutton.hide();

            this.Mgreet2 = createElement('h2');
            this.Mgreet2.html("Mark published")
            this.Mgreet2.position(displayWidth/1 - 500, displayHeight/4)

          });

          

      });




    drawSprites();


    

}