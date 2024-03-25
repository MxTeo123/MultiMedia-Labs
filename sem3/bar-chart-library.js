class BarChart{
    #canvas

    /**
     * Constructs a new bar chart
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas){
        this.#canvas = canvas;
    }

    /**
     * Draws the chart
     * @param {Array<Number>} data 
     */
    draw(data){
        const context = this.#canvas.getContext('2d');
        context.fillStyle = '#DEDEDE';
        context.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
        
       const maxValue= Math.max(...data);
       const f= this.#canvas.height/maxValue;

        const barWidth= this.#canvas.width/data.length;
        //context.fillStyle='red';//rgb/rgba
        context.lineWidth=2;
        //context.textAlign="center";

        for(let i= 0; i< data.length;i++)
        {
            const barHeight= f* data[i]*0.9;

            const barX= barWidth*i;
            const barY=this.#canvas.height- barHeight;

            context.fillStyle='red';
            context.fillRect(barX + barWidth/4,barY,barWidth/2,barHeight);
            context.strokeRect(barX + barWidth/4,barY,barWidth/2,barHeight)
            context.fillStyle='black'

            const textWidth=context.measureText(data[i]).width;
            context.fillText(data[i], barX+barWidth/2-textWidth/2,this.#canvas.height -30);
        }
    }
}