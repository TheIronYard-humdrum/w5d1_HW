
function Dog (options) {
  var options = options || {}
  this.color = options.color;
  this.name = options.name;
  this.status = "normal";
  
  if (options.hungry === undefined) {
    this.hungry = true;
  } else {
    this.hungry = options.hungry;
  }
};

export {Dog}
