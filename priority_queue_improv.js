function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (e){
    let index = this.collection.findIndex(arg => arg[1] > e[1])
    if(index != -1){
      this.collection.splice(index, 0, e);
    }else this.collection.push(e);   
  }
  this.dequeue = function(){
    return this.collection.shift()[0];
  }
  this.size = function(){
    return this.collection.length;
  }
  this.front = function(){
    return this.collection[0][0];
  }
  this.isEmpty= function(){
    return this.collection.length === 0 ;
  }
  
  // Only change code above this line
}
