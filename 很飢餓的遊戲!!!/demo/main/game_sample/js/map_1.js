var Map_1 = Framework.Class(Framework.Level , {
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};

        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)                  
    },
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        //ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },
    load: function() {

        this.audio = new Framework.Audio({
            kick: {
                mp3: define.musicPath + 'kick2.mp3',
                //ogg: define.musicPath + 'kick2.ogg',
                //wav: define.musicPath + 'kick2.wav'
            }, song1:{
                mp3: define.musicPath + '遊戲王經典配樂.mp3.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, song2:{
                mp3: define.musicPath + '刀劍神域op1《crossing field》鋼琴曲.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }, song3:{
                mp3: define.musicPath + 'night.mp3',
                //ogg: define.musicPath + 'Hot_Heat.ogg',
                //wav: define.musicPath + 'Hot_Heat.wav'
            }
        });
        //播放時, 需要給name, 其餘參數可參考W3C
        // this.audio.play({name: 'song3', loop: true});

        //0 空地  1牆壁  2空木箱  3增加炸彈木箱  4增加威力木箱  -1增加炸彈數  -2增加炸彈power
        //91 異世界洪水  192平原 123森林 137山區 255雪地 196岩漿 200池塘
        this.mapArray = [];
        //for demo
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //0
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //1
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //2
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //3
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //4
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //5
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,196,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //6
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //7
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //8
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //9
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //10
        this.mapArray.push([91,91,91,91,91,91,196,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //11
        this.mapArray.push([91,91,91,91,91,91,196,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //12
        this.mapArray.push([91,91,91,91,91,91,196,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //13
        this.mapArray.push([91,91,91,91,91,91,196,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //14
        this.mapArray.push([91,91,91,91,91,91,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //15
        this.mapArray.push([91,91,91,91,91,91,255,255,255,200,200,200,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //16
        this.mapArray.push([91,91,91,91,91,91,255,255,200,200,200,200,200,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //17
        this.mapArray.push([91,91,91,91,91,91,255,255,200,200,200,200,200,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //18
        this.mapArray.push([91,91,91,91,91,91,255,255,200,200,200,200,200,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //19
        this.mapArray.push([91,91,91,91,91,91,255,255,255,200,200,200,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //20
        this.mapArray.push([91,91,91,91,91,91,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //21
        this.mapArray.push([91,91,91,91,91,91,255,137,137,137,137,137,137,137,137,137,137,137,255,255,255,255,255,255,255,255,255,255,91,91,91,91,91,91]); //22
        this.mapArray.push([91,91,91,91,91,91,137,137,137,137,137,137,137,137,137,137,137,200,200,200,137,137,255,255,255,255,255,255,91,91,91,91,91,91]); //23
        this.mapArray.push([91,91,91,91,91,91,137,137,137,137,137,137,137,137,137,137,137,200,200,200,137,137,137,255,255,255,255,255,91,91,91,91,91,91]); //24
        this.mapArray.push([91,91,91,91,91,91,137,137,137,137,137,137,137,137,137,137,137,200,200,200,137,137,137,137,255,255,255,255,91,91,91,91,91,91]); //25
        this.mapArray.push([91,91,91,91,91,91,137,137,137,137,137,137,137,137,137,137,137,200,200,200,137,137,137,137,137,137,137,255,91,91,91,91,91,91]); //26
        this.mapArray.push([91,91,91,91,91,91,137,137,137,137,137,137,137,137,137,137,137,200,200,200,137,137,137,137,137,137,137,123,91,91,91,91,91,91]); //27
        this.mapArray.push([91,91,91,91,91,91,123,123,123,123,123,123,123,123,123,123,123,200,200,200,137,137,137,137,137,123,123,123,91,91,91,91,91,91]); //28
        this.mapArray.push([91,91,91,91,91,91,123,123,123,123,123,123,123,123,123,123,123,200,200,200,123,123,123,123,123,123,123,123,91,91,91,91,91,91]); //29
        this.mapArray.push([91,91,91,91,91,91,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,91,91,91,91,91,91]); //30
        this.mapArray.push([91,91,91,91,91,91,123,123,192,192,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,91,91,91,91,91,91]); //31
        this.mapArray.push([91,91,91,91,91,91,123,192,192,192,192,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,123,91,91,91,91,91,91]); //32
        this.mapArray.push([91,91,91,91,91,91,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,91,91,91,91,91,91]); //33
        this.mapArray.push([91,91,91,91,91,91,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,192,91,91,91,91,91,91]); //34
        this.mapArray.push([91,91,91,91,91,91,91,91,91,192,192,192,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //35
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,192,192,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //36
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,192,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //37
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //38
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //39
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //40
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //41
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //42
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //43
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //44
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //45
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //46
        this.mapArray.push([91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91,91]); //47

        this.item_map_Array = [];
        
        //1:小花 2:蜘蛛網 3:石頭 4:樹枝 5:偉凱的作業簿 6:草 7:木頭 8:燧石 9:黃金 10:豬皮
        //11:蜂刺 12:雪球 13:繩索 14:露水 15:十字鎬 16:斧頭 17:釣魚竿 18:鏟子 19:黃金斧頭 20:黃金鏟子 
        //21:黃金十字鎬 22:頭盔 23:草製盔甲 24:木製盔甲 25:長矛 26:吹箭 27:國王法杖 28:空間法杖 29:火法杖 30:冰法杖
        //31:黃金提燈 32:火把 33:帳篷 34:篝火 35:冰塊 36:漿果叢 37:採摘的花 38:採摘的草

        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //0
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,21,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //0
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,14,9,9,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0]); //2
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,32,34,34,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //3
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,28,29,30,0,2,2,2,2,2,2,2,2,0,0,0,0,0,0]); //4
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,16,19,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //5
        this.item_map_Array.push([0,0,0,0,0,0,0,0,6,6,0,0,0,0,0,11,8,12,10,0,3,3,3,3,3,3,3,3,0,0,0,0,0,0]); //6
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,18,20,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //7
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,24,25,26,0,4,4,4,4,4,4,4,4,0,0,0,0,0,0]); //8
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,31,36,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //9
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,0,0,0,0,0,0]); //10
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //12
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,0,0,0,0,0,0,0,0,0,0]); //15
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //21
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //47
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //37
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //38
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //39
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //40
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //41
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //42
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //43
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //44
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //45
        this.item_map_Array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); //40

        this.map = new World_map(this.mapArray, this.item_map_Array);
        this.map.load();
    },

    initialize: function() {
        
        this.map.init();
        //for demo
        this.map.setPlayerPosition({x:13,y:7});

        this.map.addMonster({x:9, y:5});
    },

    update: function() {     
        this.map.update();
    },

    draw:function(parentCtx){
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.map.draw(parentCtx);
        
    },

    keydown:function(e, list){
        
        Framework.DebugInfo.Log.warning(e.key);

        this.map.keydown(e, list);
        if(e.key === 'F11') {
            if(!this.isFullScreen) {
                Framework.Game.fullScreen();
                this.isFullScreen = true;
            } else {
                Framework.Game.exitFullScreen();
                this.isFullScreen = false;
            }
            
        }
    },

    keyup:function(e, list){
        
        this.map.keyup(e, list);
    },

    touchstart: function (e) {
        //為了要讓Mouse和Touch都有一樣的事件
        //又要減少Duplicated code, 故在Touch事件被觸發時, 去Trigger Mouse事件
        this.click(e[0]);
    },

    click: function (e) {  
        this.map.click(e);
    },

    mousemove: function(e) {        
        this.map.mousemove(e);
    },
});