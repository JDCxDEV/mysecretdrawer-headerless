<template>
    <div>
      <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in items" :key="index">
              <div
                class="text-center"
                :class="item.alignclass"
                style="background-size: cover; background-size: 100% 100% !important; height: 87vh !important;"
                v-bind:style="{ 'background-image': 'url(' + item.imagepath + ')' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain text-white" >
                        <div class="slider-banner-text">
                            <h4 class="text-white mb-4">{{ item.subtitle_top }}</h4>
                            <div class="text-white"  style="text-transform: none; font-family: Allura !important; font-size: 76px; max-width: 75%; line-height: 65px;">{{ item.title }}</div>
                            <h4 class="text-white mt-4" style="text-transform: none;">{{ item.subtitle }}</h4>
                            <a  v-if="item.hasButton" href="collection/all" class="btn btn-solid btn-circle mt-4">shop now</a>
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
    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/custom/banner/landing.jpg'),
          title: '',
          subtitle_top:'',
          alignclass: 'p-left',
          hasButton: false,
        },
        {
          imagepath: require('@/assets/images/custom/banner/landing-2.jpeg'),
          title: '',
          subtitle: '',
          alignclass: 'p-left',
          hasButton: true,
        }
      ]
    }
  }
}
</script>

<style>
.slider-banner-text {
  text-align: initial;
  font-family: "Raleway", Sans-serif  ;
}
.slider-banner-text h4{
  margin-top: 10px;
  max-width: 70%;
  font-size: 18px;
  font-weight: 400 !important;
  line-height: 25px;
  letter-spacing: 0.10em !important;
}

.btn-circle {
  border-radius: 20px !important;
}

.center-slider .home, .home-slider .home {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    height: 87vh !important;
} 
</style>
