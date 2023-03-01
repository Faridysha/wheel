canvas = document.getElementById('wheel');
ctx = canvas.getContext('2d');
let button = document.getElementById('button');
let raf;
let circle  = {
    x: 310,
    y: 280,
    radius: 120,
    radius2: 70,
    color: 'brown',
    ygol: 0,
    speed: 10 + 20 * Math.random(),
    colorcircle: ['red','orange','yellow','green','cyan','blue',"pink","purple"],
    text: [1,2,3,4,5,6,7,8],
    draw: function() {
        for(let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.fillStyle = this.colorcircle[i];
        ctx.moveTo(310,280);
        ctx.arc(this.x, this.y, this.radius, this.ygol, this.ygol +  Math.PI / 4);
        ctx.fill();
        ctx.font = '24px Comic Sans';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text[i], 310 + Math.cos(this.ygol + 0.4) * this.radius2, 280 + Math.sin(this.ygol  + 0.4) * this.radius2);
        ctx.closePath();
        this.ygol += 45 * (Math.PI / 180);
        
        

    }
}
};
chto_to();
function chto_to() {
    
    let ygol_change = circle.ygol * ( 180 / Math.PI) - 90; 
    f = Math.floor(ygol_change / 360);
    f2 = 360 * f;
    result_ygol =  ygol_change - f2;
    xz = 360 - result_ygol;
    zifra = Math.floor(xz / 45) + 1;
    console.log(zifra)
    
}
    let treyg = {
        x: 310,
        y: 380,
        draw: function() {
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = '2'; 
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(310, 410); 
            ctx.lineTo(290, 410);
            ctx.lineTo(330, 410);
            ctx.stroke();
            ctx.closePath();
        }
    }


    let value = [
        {},
        {result: 'Ты выиграл ничего'},
        {result: 'Випка на день'},
        {result: 'Ты выиграл сабку'},
        {result: 'Бан на день'},
        {result: 'Рисунок животного от стримера'},
        {result: 'Сыграть с тобой в любую мини-игру'},
        {result: 'Ты выиграл ничего'},
        {result: 'Заказ песни в Джаст Денсе'},

    ];
let win_window = {
    x: 185,
    y: 60,
    color: 'white',
    draw: function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 250, 70);
        ctx.fill();
        ctx.strokeStyle = 'pink';
        ctx.lineWidth = '3';
        ctx.lineJoin ='round';
        ctx.strokeRect(this.x, this.y, 250, 70);
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.font = "18px Times New Roman";
        ctx.textAlign = 'left'
        
        ctx.fillText(`${value[zifra].result}`, this.x + 20, this.y + 33);
    }
}

function otvet() {
    win_window.draw();
}
circle.draw();  
treyg.draw();
function roll() {   
    ctx.clearRect(0,0, canvas.width, canvas.height);
    circle.ygol += circle.speed * (Math.PI / 180);
    circle.speed *= 0.993  
    circle.draw(); 
    
    treyg.draw();  
        if (circle.speed <= 0.01) {
        window.cancelAnimationFrame(roll)
        chto_to();
        otvet();
        return roll;
    }
    window.requestAnimationFrame(roll)

};



button.addEventListener('click',function(e) {
   raf = window.requestAnimationFrame(roll)
});

