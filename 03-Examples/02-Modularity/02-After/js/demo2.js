define(["demo1"],function(demo){
    return{
        demo2: function(){
            console.log("Entered into 2.js");
            demo.demo1();
        }
    }
});