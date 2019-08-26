<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <!-- <scroll class="content" 
              ref="scroll" 
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
      </scroll> -->
      <!-- <home-swiper :banners="banners"/> -->
      <!-- <recommend-view :recommends="recommends"/> -->
      <feature-view/>
  </div>
</template>
<script>
  // import HomeSwiper from './childComps/HomeSwiper'
  // import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'

  // import { getHomeMultidata, getHomeGoods } from "network/home"

export default {
  name: "Home",
  components: {
    // HomeSwiper,
    // RecommendView,
    FeatureView,
    NavBar
  },
  data() {
    return {
      // banners: [],
      // recommends: []
    }
  },
  // created() {
  //   this.getHomeMultidata()
  // },
  // methods: {
  //   getHomeMultidata() {
  //     getHomeMultidata().then(res => {
  //       console.log(res);
  //       this.banners = res.data.banner.list;
  //       this.recommends = res.data.recommend.list;
  //     })
  //   }
  // }
};
</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>