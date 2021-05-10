<template>
  <div id="app" class="flex container h-screen w-full">
    <Sidebar />
    <router-view :key="$route.path" />
    <Trending />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";

export default {
  components: {
    Sidebar,
    Trending
  }
}

</script>
