class BarChart {
    #canvas

    /**
     * Constructs a new bar chart
     * @param {HTMLCanvasElement} canvas 
     */

    constructor(canvas){
        this.#canvas=canvas;
    }

    /**
     * 
     * @param {Array<Number>} data 
     */
    draw(data){
        const context=this.#canvas.getContext('2d');
        context.fillStyle='#DEDEDE'
        context.fillRect(0,0,this.#canvas.width, this.#canvas.height);

    }
}