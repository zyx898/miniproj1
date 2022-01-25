
windowWidth = 1000;
windowHeight = 1000;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(204);
    noLoop();
}


drawing_width = 1000;
drawing_height = 1000;
pos = 0;
sec_pos = 0;



function draw() {
    console.log("drawing first quarter of lines")
    while(pos < 500){
        line(pos, 0, pos, 500);
        pos+=10;
    }
    

    console.log("drawing the opposite quarter of lines")
    while(pos < 1000){
        line(pos, 500, pos, 1000);
        pos+=10;
    }


    console.log("drawing the 2 quarter of lines")
    while(sec_pos < 1000){
        line(sec_pos, 500, 1500, pos);
        sec_pos+=10;
        pos-=10;
    }
    



    

}