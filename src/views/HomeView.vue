<template>
    <div class="home w-full md:w-1/2 h-full overflow-y-scroll">
      <!--NEW POST-->
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img :src="require(`@/assets/profile.png`)" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
        </div>
        <form v-on:submit.prevent = "addNewPost" class="w-full px-4 relative">
          <textarea v-model="newPost" placeholder="What's good?" class="mt-3 pb-3 w-full focus:outline-none"/>
          <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
            Post
          </button>
        </form>
      </div>
      <!-- ALL POSTS -->
      <div v-for="(post, id) in posts" :key="id" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img :src="require(`@/assets/profile.png`)" class="h-12 w-12 rounded-full flex-none"/>
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ post.user_name }} </p>
            <p class="text-sm text-dark ml-2"> {{ post.timestamp }} </p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">
            {{ post.text }}
          </p>
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center text-sm text-dark">
              <p class="mr-2">Replies</p>
              <!-- <p> {{ post.comments }} </p> -->
            </div>
            <div class="flex items-center text-sm text-dark">
              <p class="mr-2">Rethinks</p>
              <!-- <p> {{ post.retweets }} </p> -->
            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-heart mr-3"></i>
              <p> {{ post.likes }} </p>
            </div>
            <div class="flex items-center text-sm text-dark">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import localStore from '@/localStore.js';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      posts: localStore.posts,
      newPost: null,
    }
  },
  methods: {
    addNewPost() {
      console.log(this.posts);
      localStore.addNewPost(this.newPost);
    }
  }
}
</script>
