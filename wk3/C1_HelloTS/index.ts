let obj ={
   a: 1,
   b: "2",
   adder: function(i:string):string{
      return i + this.b;
   }
};

console.log(obj.adder("3"));

