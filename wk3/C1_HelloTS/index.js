var obj = {
    a: 1,
    b: "2",
    adder: function (i) {
        return i + this.b;
    }
};
console.log(obj.adder("3"));
