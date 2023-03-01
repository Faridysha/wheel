canvas = document.getElementById('wheel');
ctx = canvas.getContext('2d');
let button = document.getElementById('button');
let raf;
let circle  = {
    x: 250,
    y: 250,
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
        ctx.moveTo(250,250);
        ctx.arc(this.x, this.y, this.radius, this.ygol, this.ygol +  Math.PI / 4);
        ctx.fill();
        ctx.font = '24px Comic Sans';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.text[i], 250 + Math.cos(this.ygol + 0.4) * this.radius2, 250 + Math.sin(this.ygol  + 0.4) * this.radius2);
        ctx.closePath();
        this.ygol += 45 * (Math.PI / 180);
        

    }
}
};
chto_to();
function chto_to() {
    
    let ygol_change = circle.ygol;
    console.log(ygol_change);
    f = Math.floor(ygol_change / 360);
    f2 = 360 * f;
    result_ygol =  ygol_change - f2;
    xz = 360 - result_ygol;
    console.log(xz);
    zifra = Math.floor(xz / 45) + 1;
    console.log(result_ygol)
    console.log(zifra)
}

    let treyg = {
        x: 250,
        y: 350,
        draw: function() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(220, 390);
            ctx.lineTo(280,390);
            ctx.lineTo(250,350);
            ctx.stroke();
            ctx.closePath();
        }
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
        return roll;
    }
    window.requestAnimationFrame(roll)

};



button.addEventListener('click',function(e) {
   raf = window.requestAnimationFrame(roll)
});

