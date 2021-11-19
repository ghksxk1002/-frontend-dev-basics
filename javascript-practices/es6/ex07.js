/**
 * class rect
 */

class Ract {
    constructor(w, h){
        this.w = w,
        this.h = h
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