var modalDialog = new Vue({
  el : '#regLayer',
  data : {
    showReg : false
  },
  created :function(){
    var self = this;
    bus.$on('showReg', (isShow)=>{
      this.showReg = isShow;
    })
  },
  methods :{
    handleClose : function(){
      this.showReg = false;
    }
  }
})