<template>
  <div id="app" class="flex container h-screen w-full">
    <!--sidenav-->
    <div class="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 hover:bg-lightblue text-3xl text-blue rounded-full">
      </button>
      <div>
        <button v-for="tab in tabs" :key="tab.id" class="flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto">
          hello
        </button>
      </div>
    </div>
    <!--tweets-->
    <div class="w-1/2 h-full">
    </div>
    <!--trending-->
    <div class="w-1/3 h-full border-l border-lighter">
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {

  },
  data: function() {
    return {
      tabs: [
        {title: 'Home', id:'home'},
        {title: 'Explore', id:'explore'}
      ]
    }
  },
  props: {

  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
