# dp2020s_term_project_OOP_Project_Dont_Starve
## <br>Team Members
 1.106820003 潘建蒼<br>
 2.106820046 凃昱安
 
## Problem Statement

### 1.The definition of RPG game
<pre>
    RPG(角色扮演)遊戲是一種遊戲類型，在遊戲中，玩家扮演虛擬世界中的一個或者幾個角色進行遊戲，玩家通過操控遊戲角色與敵人戰鬥，提升
等級、收集裝備和完成遊戲設置的任務，並體驗劇情。通常這類遊戲都是由玩家扮演角色在遊戲世界中漫遊，而一路上的各種遭遇則是玩家人物成長
及遊戲進行的重要關鍵所在。
</pre>

### 2.What is Don't Starve
<pre>
    以生存為主軸的2D 冒險養成RPG遊戲，在遊戲中玩家必須想辦法活下去，並在這過程中提升自己的裝備和人物數值，最後目標是打倒最終魔王
，才算通關。
</pre>
<a href="https://www.youtube.com/watch?v=GG9Ql06OE3o&t=2s""
        " target="_blank"><img src="http://img.youtube.com/vi/w925GrVEajE/0.jpg" 
        alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
### 3.The setting in Don't Starve
<pre>
1. 角色動作：
    採集資源：玩家可以使用採集功能鍵，將遇到的物資採集進背包裡。
    挖掘物資：玩家必須裝備十字搞和圓鍬等工具，才能對石頭和植物進行挖掘的動作。
    攻擊怪獸：玩家可以透過武器來施放各種技能，在沒有武器的情況下只能用最低的攻擊力攻擊怪物。
    合成物資：玩家可以透過左邊欄位的物品合成欄，來合成所需物資，但須具備該物資所需材料。
    使用背包中物件 : 玩家可以透過點擊食用食物、裝備道具、種植植物。

2. 遊戲定義
    遊戲中的一天：等於現實的2分鐘

</pre>
### 4.The game object in Don't Starve
<pre>
1. 武器物件：
    近戰武器：攻擊範圍為角色前一格。
    魔法武器：攻擊範圍為以角色前三格為中心的3*3正方形。
    弓類武器：攻擊範圍為角色前五格。

2. 地形物件
    雪地地形：一般地形
    平原地形：一般地形
    山地地形：一般地形
    森林地形：一般地形
    熔岩地形：一般地形
    池塘地形：無法進入的地形
    血池地形：無法進入的地形

3. 物品物件：
        可再生物件：
            植物型物件屬於可再生物件，會在採摘或砍伐後，等待一段時間，並自動再生。
        不可再生物件：
            物品類物件屬於不可再生物件，會在耐久度歸零時移除。

5. 怪獸物件
    小怪: 具自動走向玩家與攻擊功能的怪獸物件。包含:豬人、牛人、眼球怪、蜜蜂怪、蝙蝠怪。
    最終魔王：具近戰攻擊，兩種遠程攻擊，一限制玩家移動技能，超出畫面仍會追擊玩家。
    
6. 狀態物件：
    時間狀態：遊戲開始時便會開始累計時間，當時間集滿便會歸零並進入下一個時間階段，
              時間階段分為: 白天、下午、黑夜。
    飢餓狀態：遊戲開始時角色的飢餓度會逐漸下降，需進食以補充飢餓度。
    血量狀態：當飢餓度下降到零時，便會持續扣血，受怪物攻擊時，根據怪物攻擊力以及自身防禦力扣血，
              血量歸零則遊戲結束。

7. 人物面板物件：
    用於顯示角色自身能力值，包刮: 生命、魔力、物功、魔攻、弓攻、力量、智力、防禦、技巧，
    可於升級後自由分配點數給所需能力。

8. 欄位物件：
    背包欄位：用於放置撿取或合成獲得之物件。
    合成欄位：用於合成所需物件，若背包中無足夠空間或素材則無法合成。
    裝備欄位：用於裝備背包中之可裝備物件，裝備區分為身體、頭、手。

9. 動畫管理物件：
    用於管理動畫的撥放，例如:魔法武器施放動畫、弓箭射擊動畫...。

</pre>


## Description
<pre>本專題將著重在優化整體的遊戲程式碼，使遊戲執行速度更加有效率之外，再增添易維護和易擴充等性質。
</pre>
## Future
<pre>
繼續更多遊戲功能的實作，並搭配其他的pattern，使程式不僅兼具可讀性還能提升效率。並在優化方面加上角色配音和音效，使遊戲更加完整，提升
遊玩者的遊戲體驗。
</pre>
## Technique
<pre>
1. Javascript 語言：
    使用Javascript為實作遊戲的語言。

2. Google Chrome：
    以Google Chrome為遊戲呈現的平台。

</pre>

## Design Patterns in Our Code
<pre>
1.   Patterns on JavaScript

    <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/%E5%9C%96%E8%A1%A8.PNG" width="80%" height="80%" />
2.   工廠設計模式(Simple Factory Pattern)：<br>
    File: object_factory.js
          world_map.js createMonster
          backpack.js addItemBySynthesis
          item_map.js createItemMap<br>
    Motivation:我們所寫的是RPG遊戲，所以會需要很多的遊戲物件；但是很多的物件其底下包含了很多相同的變數和方法，在結構上大致相同，只會有些
        許差異。但我們卻要為他們分別創建不同的物件類別，結果便是創建了數十種物件類別，導致程式碼看起來十分混亂。<br>
    Solution:透過工廠設計模式，我們可以將想要創建的工具的參數帶入，（例如：鏟子、黃金鏟子······）工廠便會根據參數來創建所需要的工具。<br>
    Consequence:增加了寫程式的便利性，減少不必要的冗餘程式，使創建物件更加地有效率。
        創建模式：
            工具創建模式：帶入（攻擊力, 物件圖片url, 物件編號, 扣除耐久方法）四個參數，工廠會自動創建對應的工具並回傳。
            武器創建模式：帶入 (攻擊力, 物件圖片url, 物件編號, 扣除耐久方法, 圖片放大倍率) 四個參數，工廠會自動創建對應的武器並回傳。
    Code:
        套用前：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_factory1.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_factory2.PNG" width="80%" height="80%" />
        套用後：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/factory3.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/factory2.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/factory1.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/factory4.PNG" width="80%" height="80%" />
    diagram:
        <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/simplefactory_diagram.PNG" width="100%" height="100%" />
    Cons & Dos:
        優點：可擴充性較高，改變帶入參數即可創建不同物件，省去大量重複程式碼，且能統一管理物件的生成。
        缺點：辨識度較原來寫死的物件低，違反OCP，若要新增創建的物件，勢必要在factory中新增else if判斷或switch case。

3.   訪問者模式(Visitor Pattern)：<br>
    File: reduceDurabilityVisitor.js
          world_map.js handleFishing handlePlantDig handleCutTree handleRockDig
          normal_attack.js attack
          magic_attack.js attack
          arror_attack.js attack<br>
    Demo：
        <a href="https://www.youtube.com/watch?v=osyrE_9xBGg&feature=youtu.be""
        " target="_blank"><img src="http://img.youtube.com/vi/w925GrVEajE/0.jpg" 
        alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
    Motivation:遊戲中有些相似類別，類別中都有部分方法內容相似，但還是需要判斷目前要做事的類別才能正確執行，例如:減少裝備耐
        久度的方法會因裝備的不同而有差異。<br>
    Solution:透過訪問者模式，我們可以將物件的行為切開，把特定的操作邏輯行為包裝在分開的方法裡，增加行為的獨立性質。<br>
    Consequence: 可以依據訪問到的對象不同而產生不同的行為，不必於每次呼叫函式前判斷物件種類，提升寫程式的效率性和易讀性。<br>
        訪問模式：
            基礎工具模式：一次性的耐久度扣10
            黃金工具模式：一次性的耐久度扣5
            火把工具模式：持續性的耐久度扣1
    Code:
        套用前：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_visitor.PNG" width="80%" height="80%" />
        套用後： 
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/visitor.PNG" width="80%" height="80%" />
    Cons & Dos:
        優點：具較高的可擴充性，改變傳入的visitor即可產生不同效果。可維護性較高，若需改變行為，只需改動visitor內函式，較原本分散在各個物件中方便維護。
        缺點：本專案中只使用了一種visitor，且功能較為簡單、單一，在此情形下，不如分別寫在物件中便利。

4.   策略者模式(Strategy Pattern)<br>
    File: world_map.js keyup
          normal_attack.js 
          magic_attack.js 
          arror_attack.js 
          null_attack.js
          bombMan.js attack<br>
    Demo：
        <a href="https://www.youtube.com/watch?v=RboLkH3zq7A""
        " target="_blank"><img src="http://img.youtube.com/vi/w925GrVEajE/0.jpg" 
        alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
    Motivation: 部分遊戲中類別的函式會根據條件進行不同的行為，例如: 角色物件下有攻擊函式，但攻擊的方法會隨持有的武器而改變<br>
    Solution :透過策略者模式，我們可以將武器攻擊的函式個別封裝起來，讓他們之間可以互相替換，此模式讓攻擊函式的變動獨立於使用操作的物件之
        外。<br>
    Consequence:角色實際上並不用知道到底要用什麼武器攻擊，而是接收由外部傳入攻擊方式物件，再透過角色內的攻擊函式的呼叫去攻擊，這下就把角
        色與裝備的相依分離了，進而降低角色與其他類別的耦合度。<br>
    Code:
        套用前：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_strategy_pattern.PNG" width="80%" height="80%" />
        套用後： 
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/strategy_pattern.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/strategy_pattern2.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/strategy_pattern3.PNG" width="80%" height="80%" />
    Diagram:
        <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/strategy_diagram.PNG" width="100%" height="100%" />
        
    Cons & Dos:
        優點：物件函式的分工較為明確，角色的攻擊函式只負責執行攻擊，不需做多餘的判斷。
        缺點：若有新的攻擊方法，則必定需要新增物件，增加傳入的判斷。

5.   空物件模式(Null Object Pattern)<br>
    File: world_map.js keyup
          null_attack.js<br>
    Motivation:實作strategy pattern時，我們會根據角色使用的武器給定attackMode，並傳送給角色，由角色來進行攻擊，但在某些情況下，攻擊會失敗
    或無法發動，例如:魔法類武器沒有集滿能量便發動攻擊，那麼此種情形下該傳入何種attackMode便成為一個問題。<br>
    Solution :透過空物件模式，新增一個攻擊用null_attack物件，帶有判斷攻擊是否成功的布林值，以及一個空的攻擊函式。<br>
    Consequence: 一開始的 attackMode先以null_attack初始化，僅在條件成立時以其他攻擊方式代替，如此可避免攻擊失敗或無法發動時，角色仍執行傳
    入物件的attack函式所造成的錯誤。
    Code:
        套用前:
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_null_pattern.PNG" width="80%" height="80%" />
        套用後: 
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/null_pattern1.PNG" width="80%" height="80%" />
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/null_pattern2.PNG" width="80%" height="80%" />
    Cons & Dos:
        優點：可省去物件為null的判斷，簡化程式碼。
        缺點：本專案中需判斷物件為null的地方較少，為此新增一個null_attack的物件，並無顯著效果。<br>
6.   代理人模式--虛擬代理(Proxy Pattern)<br>
    File: Local_map_0.js catchItem
          proxy.js 
          item_map.js<br>
    Motivation:當遊戲選單中的開始遊戲按鍵一被按下，遊戲物件地圖即開始建立，建置完成後遊戲才開始；然而物件地圖底下包含100張遊戲物件小地圖，十
        分龐大，等待建置完成的時間約為5至6分鐘，嚴重危害到使用者體驗。<br>
    Solution :透過代理人模式，我們可以先進入遊戲，若角色所在的物件地圖為空，再建立物件小地圖，運用邊玩邊建立的方式，可加速遊戲運作的速度。<br>
    Consequence: 地圖是為400*400大小，小地圖為40*40，故有100張小地圖，角色初始座標為(25, 25)，虛擬代理人先判斷角色位在的小地圖是否為空，
        若是的話，則先建立第一張小地圖，之後持續偵測角色位置，當角色來到第二張小地圖邊界的，例如：(40, 39)，這時代理人判斷第二張小地圖是
        否為空，是的話則建立第二張小地圖，使得玩家能繼續遊玩。在一開始點擊開始遊戲，即能進入遊戲，不但增加了使用者體驗，且先不建立還沒用
        到的地圖這件事本身，也使得記憶體的使用效率增加。
    Diagram:
        套用前：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_diagram1.PNG" width="80%" height="80%" />
        套用後：
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_diagram2.PNG" width="80%" height="80%" />
    Code:
        說明：
            Local_map_0.js：
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_pattern1.PNG" width="100%" height="100%" />
        套用前：
            item_map.js：
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/before_proxy.PNG" width="90%" height="90%" />
        套用後：
            item_map.js：
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_pattern_item_map1.PNG" width="100%" height="100%" />
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_pattern_item_map2.PNG" width="100%" height="100%" />
            proxy.js：
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/proxy_pattern2.PNG" width="100%" height="100%" />

    Video:
        <a href="https://www.youtube.com/watch?v=OLSr5gqo0JM&feature=youtu.be""
        " target="_blank"><img src="http://img.youtube.com/vi/w925GrVEajE/0.jpg" 
        alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
    Cons & Dos:
        優點：藉由代理人來確認物件地圖是否建置完成，若無則先顯示空物件地圖，使玩家能先進入遊戲中遊玩，增進了使用者的體驗。
        缺點：創建物品必同時顯示在畫面上，會依照電腦小能的不同，而有長短不同的延遲時間。
7.   觀察者模式(Observer Pattern)<br>
    File: World_map.js load init update player1GotHurt clockDraw deadClear gameClear
          character_description.js update
          creation_blood_status.js update<br>
    Motivation:遊戲中有兩個物件是需要透過角色能力值和狀態來更新的，一個是角色能力面板，一個是角色狀態即時顯示面板；然而這兩個物件在程式中
    的寫法是各自獨立，需要各自傳入角色進行更新，十分的麻煩，不但增加程式碼的複雜度，還增加了兩物件更新不同步的問題。<br>
    Demo：
        <a href="https://www.youtube.com/watch?v=B_l0-5RtQsE&feature=youtu.be""
        " target="_blank"><img src="http://img.youtube.com/vi/w925GrVEajE/0.jpg" 
        alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
    Solution : 透過觀察者模式，將角色能力面板和角色狀態即時顯示面板列為觀察者，並且把角色列為被觀察者，只要角色能力獲得更新，則觀察者會同
    步發送更新通知。<br>
    Consequence: 將需要同一個物件的更新獨立出來加入觀察者，在簡化了程式之餘，還為未來如有相同需要更新的新物件，提供更有效率的更新方式。
    Diagram:
        套用前:
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/1.PNG" width="50%" height="50%" />
        套用後:
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/obsever_diagram.PNG" width="80%" height="80%" />
    Code:
        creation_blood_status.js:
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observer_creation_pattern.PNG" width="100%" height="100%" />
        character_description.js:
            <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observer_description_pattern.PNG" width="100%" height="100%" />
        套用前:
            world_map.js:
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/2.PNG" width="100%" height="100%" />
        套用後:
            observer.js:
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observer_pattern.PNG" width="100%" height="100%" />
            world_map.js:
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/3.PNG" width="100%" height="100%" />
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observr_world1.PNG" width="100%" height="100%" />
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observr_world2.PNG" width="100%" height="100%" />
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observr_world3.PNG" width="100%" height="100%" />
                <img src="https://ssl-gitlab.csie.ntut.edu.tw/106820003/dp2020s_term_project_oop_project_dont_starve/raw/master/picture/observr_world4.PNG" width="100%" height="100%" />
    Cons & Dos:
        優點：將需要更新的物件統一訂閱被觀察的物件，藉由統一管理的方式增進了更新上的同步，避免產生因為更新不一致導致的顯示延遲問題，且具
            備易維護的性質。
        缺點：：本專案中更新仰賴同一物件的物件較少，為此新增一個觀察者的物件，並無顯著效果。


</pre>
</pre>
