

const app = Vue.createApp({

data(){
  return{
    imgUrl:['./pic/a.png','./pic/b.png','./pic/c.png','./pic/d.png','./pic/e.jpg'],
    index:0,
    count:0,
    interval:''
  }
},

methods:{
  next(){
    this.index++;
    this.index =  this.index % this.imgUrl.length;
    
  },
  pre(){
    this.index--;
    this.index = (this.imgUrl.length + this.index) % this.imgUrl.length;
    
  },
  auto(){
    
    this.interval = setInterval(this.next, 3000);
  },
  
  stopAuto(){
    clearInterval(this.interval); 
  }

}

});

app.mount('#app')


