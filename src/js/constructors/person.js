function Human (options) {
  var options = options || {}
  this.pet = function(dog) {
    dog.status = "happy";
  };
  this.feed = function(dog) {
    dog.hungry = false;
  };
    if (options.cool === undefined) {
    this.cool = false;
  } else {
    this.cool = options.cool;
  }
};



export {Human}