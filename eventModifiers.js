new Vue({
  el: "#test",
  data: {
    message: "",
    message1: "",
    trim: "",
    count: "",
    keyboard:"",
    shiftKey1:"",
    metaKey1:"",
  
 
  },
  methods: {
    submitForm: function () {
      alert("Submitted");
    },
    submitClick: function () {
      console.log("Clicked");
    },
    captureModifier: function () {
      console.log("Example Of Capture Modifier");
    },
    btnClick: function () {
      console.log("button Click");
    },
    ivHandler:function()
    {
        console.log("Selft Modifier");
    },
    btnHandler:function()
    {
     console.log("button Handler");
    },
    keyboardevents:function(e)
    {
       return this.keyboard= e.target.value;
    },
    shiftKey:function(e)
    {
      return this. shiftKey1=e.target.value;
    },
    metaKey:function(e){
      return this.metaKey1=e.target.value;
    }
  },
});
