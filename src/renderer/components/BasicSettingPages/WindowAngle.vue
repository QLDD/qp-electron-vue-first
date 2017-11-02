<template>
  <div class="windowangle">
      <div class="windowangle-box">
          <div @click="minimize">
              <Icon type="ios-minus-empty" size="25" color="red"></Icon>
          </div>
          <div @click="maximize">
              <Icon type="ios-plus-empty" size="25"></Icon>
          </div>
          <div @click="close">
              <Icon type="ios-close-empty" size="25"></Icon>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'window-angle',
        data() {
            return {
                currentWindow: this.$electron.remote.getCurrentWindow()            
            }
        },
        methods: {
            minimize() {
                if(!this.currentWindow.isMinimized()) {
                    this.currentWindow.minimize();
                }
            },

            maximize() {
                if(!this.currentWindow.isMaximized()) {
                    this.currentWindow.maximize();
                } else {
                    this.currentWindow.unmaximize();
                }
            },

            close() {
                this.currentWindow.close();
            }
        },        
    }
</script>

<style>
    .windowangle {
        width: 100%;
        height: 25px;
        display: flex;        
        background-color: #5789DC;
        justify-content: flex-end;        
    }

    .windowangle-box {
        width: 138px;
        height: 25px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .windowangle-box > div {
        height: 25px;
        width: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
    } 
</style>


