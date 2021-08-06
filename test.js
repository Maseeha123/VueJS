new Vue({
  el: "#test",
  data: {
    // Vue Directives
    message1:"Vue JS Learning...",
    a:-110,
    showExample:false,
    data:"Hellow this is data property",
    number1: 1,
    number2: 2,
    array: [10, 20, 30, 40, 60, 70, 89],
    number: 10,
    seen: true,
    message: "Hellow",
    rawhtml: "<ol><li>Apple</li><li>Orange</li></ol>",
    raw:"<h5>Hello Vue Js</h5>"
  },
  methods: {
    randomNumber1: function () {
      var largest = this.array.filter((x) => {
        return x > 20;
      });
      console.log(largest);
      const randomNumber = Math.random();
      console.log(randomNumber);
      if (randomNumber < 0.5) {
        return this.message;
      } else {
        return "Master Vue";
      }
    },
    rawHtml:function() {
        return  this. rawhtml;  
        },
        rawHtml1:function()
        {
          return this.raw
        }
  }


  
});
