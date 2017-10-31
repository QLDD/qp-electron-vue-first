<template>
  <div class="loading">
      <div class="image-bg">        
      </div>      
  </div>
</template>

<script>
export default {
  name: 'loading-page',
  data() {
    return {

    }   
  },
  methods: {
    checkUpVersion() {
      //调接口，获取版本号
      if(version == current) {
        //判断是否登录
        this.checkUplogin();
      } else if(ifupdate) {
        //更新软件
      } else {
        //判断是否登录
        this.checkUplogin();
      }
    },
    checkUplogin() {
      
    }
  },
  computed: {

  },

  created() {
    this.checkUpVersion();
  },

  destroyed() {

  }
}
</script>

<style>
  .loading {
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;         
    background-color: #5789DC;    
    background-size: cover;   
  }

  .image-bg {
    width: 90%;
    height: 80%;                     
    border-radius: 6px;    
    background-color: white;
    /* background: url('~@/assets/loading.jpg') no-repeat;
    background-size: cover; */
  }

  #main {
    display: flex;                    /* flex布局 */
    flex-direction: column;           /* 布局方向 */          
    flex-wrap: nowrap;                /* 如何换行 */
    flex-flow: column nowrap;         /* flxe-direction 和 flex-warp 的缩写 */
    justify-content: center;          /* 在主轴上的对齐方式 */
    align-items: center;              /* 在交叉轴上如何对齐 */
    align-content: center;            /* 在交叉轴上多跟轴线如何对齐 */    
  }
  /*  */
  #main > div {
    order: 1;         /* 排列顺序，小的靠前 */
    flex-grow: 0;     /* 放大比例 */
    flex-shrink: 1;   /* 缩小比例 */
    flex-basis: 50%;  /* 在分配多余空间前，占据的主轴空间 */
    flex: 0 1 auto;   /* flex-grow flex-shrink flex-basis 三者合写 */ 
    align-self: auto; /* 对齐方式，可覆盖align-items */

  }
</style>

