class ECGBackground {
    constructor() {
        this.canvas = document.getElementById('ecgBackground');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ecgData = [];
        this.generateECGData();

        this.animate = this.animate.bind(this);
        this.resizeHandler = this.resizeHandler.bind(this);

        window.addEventListener('resize', this.resizeHandler);
        this.animate();
    }

    generateECGData() {
        const baselineY = this.height / 2;
        const amplitude = this.height / 10;
        const frequency = 0.05;
        const points = 1000;

        for (let i = 0; i < points; i++) {
            const x = (i / points) * this.width;
            let y = baselineY;

            // Generate P wave
            y += amplitude * 0.25 * Math.sin(2 * Math.PI * frequency * i);

            // Generate QRS complex
            if (i % 200 === 0) {
                y -= amplitude * 0.5;
            } else if (i % 200 === 1) {
                y += amplitude * 1.5;
            } else if (i % 200 === 2) {
                y -= amplitude * 1;
            }

            // Generate T wave
            y += amplitude * 0.35 * Math.sin(2 * Math.PI * frequency * 0.5 * i);

            this.ecgData.push({ x, y });
        }
    }

    drawECG(offset) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'rgba(74, 144, 226, 0.3)'; // 使用浅蓝色,降低不透明度
        this.ctx.lineWidth = 2;

        for (let i = 0; i < this.ecgData.length; i++) {
            const point = this.ecgData[i];
            const x = (point.x + offset) % this.width;
            if (i === 0) {
                this.ctx.moveTo(x, point.y);
            } else {
                this.ctx.lineTo(x, point.y);
            }
        }

        this.ctx.stroke();
    }

    animate() {
        const speed = 1;
        this.offset = (this.offset || 0) - speed;
        this.drawECG(this.offset);
        requestAnimationFrame(this.animate);
    }

    resizeHandler() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ecgData = [];
        this.generateECGData();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ECGBackground();
});