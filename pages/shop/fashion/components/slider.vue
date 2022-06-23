<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="home text-center"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <h4 class="text-white">{{ item.title }}</h4>
                          <h4 class="text-white text-header-gb">{{ item.subtitle }}</h4>
                          <nuxt-link :to="{ path: '/collection/leftsidebar/all'}" class="btn btn-solid">shop now</nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'Bring new adventure into your life!',
          subtitle: 'Beautiful Things For The Beautiful You',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/home-banner/1.jpg'),
          title: 'Bring new adventure into your life!',
          subtitle: 'Beautiful Things For The Beautiful You',
          alignclass: 'p-left'
        }
      ]
    }
  }
}
</script>
