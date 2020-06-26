var Observer = function() {
    this.message;
    this.observer_list = [];
    this.notifyObservers = function(){
        for(var i=0;i<this.observer_list.length;i++)
            this.observer_list[i].update(this.message);
    }

    this.removeObserver = function(){
        this.observer_list = [];
    }

    this.registerObserver = function(subject){
<<<<<<< HEAD
        this.observer_list.push(subject);
=======
        this.observer_list[i].push(subject);
>>>>>>> 0e15a7739cac0dc946fbb40f875555ce5c139aa0
    }

    this.getMessage = function(message){
        this.message = message;
    }
};