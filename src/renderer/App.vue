<template>
  <div id="app">
    <div>
      <window-angle></window-angle>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import WindowAngle from './components/BasicSettingPages/WindowAngle';
  export default {
    name: 'app',
    components: { WindowAngle },
  }
</script>

<style>
  /* CSS */
  html, body {
    margin: 0;
    padding: 0;
  }

  body {    
    
  }

  #app {        
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;   
  }
</style>
