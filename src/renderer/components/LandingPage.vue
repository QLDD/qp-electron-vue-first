<template>
  <div id="landing">    
    <div class="landing-main">      
      <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
        <system-information></system-information>
      </div>

      <div class="middle">
        <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
        <Form :model="formItem">
          <FormItem prop="user">
            <Input type="text" v-model="Username" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            electron-vue comes packed with detailed documentation that covers everything from
            internal configurations, using the project structure, building your application,
            and so much more.
          </p>
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
        </div>
        <div class="doc">
          <div class="title alt">Other Documentation</div>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'  
  export default {
    name: 'landing-page',
    date() {
      return {
        formItem: {
          input: ''  
        },
        Username: '',
        password: ''
              
      }
    },
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  /* @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro'); */

  /* * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } */

  /* body { font-family: 'Source Sans Pro', sans-serif; } */

  #landing {
    /* background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      ); */
    height: 96%;
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;         
    background-color: #5789DC;    
    background-size: cover;         
  }

 

  .landing-main {
    width: 90%;
    height: 90%;    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .landing-main > div { flex-basis: 30%; }

  .left-side {
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .middle {

  }

  #logo {
    height: auto;
    margin-bottom: 0px;
    width: 200px;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
