Storage.prototype.setObj=function(a,b){return this.setItem(a,JSON.stringify(b))};Storage.prototype.getObj=function(a){return JSON.parse(this.getItem(a))};
