<template>
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4" placeholder="Search Twitter" />
      <i class="fas fa-search absolute left-0 top-0 mt-5 ml-12 text-sm text-light"></i>
      <div class="w-full rounded-lg bg-lightest">
        <div class="flex items-center justify-between p-3">
          <p class="text-lg font-bold">Trends for You</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in trending" :key="trend.title" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
          <div>
            <p class="text-xs text-left leading-tight text-dark"> {{ trend.top}} </p>
            <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title}} </p>
            <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom}} </p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
      <div class="w-full rounded-lg bg-lightest my-4">
        <div class=" p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button v-for="friend in friends" :key="friend.name" class="w-full flex hover:bg-lighter p-3 border-t border-lighter">
          <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight"> {{ friend.name }} </p>
            <p class="text-sm leading-tight"> {{ friend.handle }} </p>
          </div>
          <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
            Follow
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TheTrending',
  components: {
    
  },
  data() {
    return {
        friends: [
            {src: 'elon.jpg', name: 'Elon Musk', handle: '@teslaBoy'},
            {src: 'monk.jpg', name: 'Adrian Monk', handle: '@detective:)'},
            {src: 'kevin.jpg', name: 'Kevin Hart', handle: '@miniRock'}
        ],
        trending: [
            {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
            {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
            {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
            {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
            {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
        ],
    }
  }
}
</script>