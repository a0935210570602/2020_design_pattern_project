var Creation_blood_status = function() {
    this.character_tocan = new Framework.Sprite(define.materialPath + 'character_tocan.png'); 
    this.character_tocan.scale = 0.35;
    this.character_tocan.position = {x: 64*3+64, y:64*3};
    this.character_blood_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_blood_chart.scale = 1.75;
    this.character_blood_chart.position = {x: 64*6, y: 64*3-20}
    this.character_magic_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_magic_chart.scale = 1.75;
    this.character_magic_chart.position = {x: 64*6, y: 64*3+25-20}
    this.character_hunger_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.character_hunger_chart.scale = 1.75;
    this.character_hunger_chart.position = {x: 64*6, y: 64*3+50-20}
    this.character_blood_ratio = 1;
    this.character_magic_ratio = 1;
    this.character_hunger_ratio = 1;
    this.blood_chart = new Framework.Sprite(define.materialPath + 'blood_chart.png'); 
    this.blood_chart.scale = 1.5;
    this.blood_ratio = [];
    this.monster_tocan; 
    this.init = function(player){
        this.update(player);
    }
    this.draw = function(ctx){
        this.character_tocan.draw(ctx);
        ctx.beginPath();
        ctx.rect(64*5-10, 64*3-12-20, 150*this.character_blood_ratio, 12);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        this.character_blood_chart.draw(ctx);
        ctx.beginPath();
        ctx.rect(64*5-10, 64*3+12-20, 150*this.character_magic_ratio, 12);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
        this.character_magic_chart.draw(ctx);
        ctx.beginPath();
        ctx.rect(64*5-10+1, 64*3+38-20, 150*this.character_hunger_ratio, 12);
        ctx.fillStyle = "LightGoldenrodYellow";
        ctx.fill();
        ctx.closePath();
        this.character_hunger_chart.draw(ctx);
    }
    this.update  = function(player){
<<<<<<< HEAD
        console.log(this.character_hunger_ratio);
=======
>>>>>>> 0e15a7739cac0dc946fbb40f875555ce5c139aa0
        this.character_hunger_ratio = player.hunger_current_point / player.hunger_total_point;
        this.character_magic_ratio = player.character_descruption_point[1] / player.character_descruption_point[6];
        this.character_blood_ratio = player.character_descruption_point[0] / player.character_descruption_point[5];
        if(this.character_blood_ratio<0)
            this.character_blood_ratio=0;
    }
};