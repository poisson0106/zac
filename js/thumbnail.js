var bus = new Vue();
var thumbnail = new Vue({
    el : "#app",
    methods : {
        doPromptReg : function(){
            bus.$emit('showReg',true)
        }
    }
});