/**
 * class rect
 */

class Ract {
    constructor(w, h){
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다`);
    }

    // test
}

const rect1 = new Ract(10,20);
const rect2 = new Ract(30,20);


rect1.draw()
rect2.draw()

/**
 * 생성자 함수(prototype기반)
 */

const Circle = function(x, y, z){
    this.x= x;
    this.y= y;
    this.z= z;
}

Circle.prototype.draw = function(){
    console.log(`Circle(w=${this.w}, y=${this.y}, z=${this.z})를 그렸습니다`);
}

const circle = new Circle(100, 200, 300);
const circle2 = new Circle(10, 20, 30);

circle.draw();
circle2.draw();

/**
 * extends
 */

class Shape {
    constructor(bgColor, lnColor){
        this.bgColor =bgColor,
        this.lnColor = lnColor
    }

    draw(){
        console.log('그릴수 없습니다');
    }

    arer(){
        console.log('구할수 없습니다');
    }

}

class Tri extends Shape {
    constructor(w,h){
        super('red', 'blad');
        this.w = w;
        this.h = h;
    }

    // @Over
    draw(){
        console.log(`tr(w=${this.w}, h=${this.h}, bg=${this.bgColor}, ln=${this.lnColor})`);
    }
}

const tr = new Tri(10, 20);

tr.draw();
tr.arer();
