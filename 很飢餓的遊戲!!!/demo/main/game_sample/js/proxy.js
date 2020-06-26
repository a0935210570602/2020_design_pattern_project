var Proxy = function() {
    this.map_name ;
    this.item_map = new Item_map();
    this.null_array = [];
    for(var i=0;i<100;i++)
        this.null_array.push(new Item_blank());
    this.objectFactory = new Object_factory();
    this.name = "World";
    this.pickItemMap= function(map_number){
        if(this.item_map.itemArray[map_number] != null)
            return this.item_map.pickItemMap(map_number);
        else{
            this.item_map.createItemMap(map_number);
            return this.item_map.pickItemMap(map_number);
        }
    }
};

