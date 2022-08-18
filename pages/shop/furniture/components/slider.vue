<template>
    <div>
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
                      <div class="slider-contain text-white">
                        <div class="slider-banner-text">
                            <h4 class="text-white">{{ item.subtitle_top }}</h4>
                            <h1 class="text-white">{{ item.title }}</h1>
                            <h4 class="text-white">{{ item.subtitle }}</h4>
                            <a href class="btn btn-solid btn-circle">shop now</a>
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
          imagepath: require('@/assets/images/custom/banner/woman_in_lingerie.jpg'),
          title: 'Bring new adventure into your life!',
          subtitle: 'The world’s most sensuous lingerie delivered to your door!',
          subtitle_top: 'Bring new adventure into your life!',
          alignclass: 'p-left'
        },
        {
          imagepath: require('@/assets/images/custom/banner/woman_in_lingerie.jpeg'),
          title: 'JUST ONE LIFE TO LIVE…',
          subtitle: 'Get an exciting new outfit of beautiful lingerie delivered to your door every month for just $34.95! Gorgeous designs assembled with the finest fabrics. Lingerie guaranteed to stimulate both mind and body. Just choose your preferred size, complete the order and we’ll do the rest! Our promise is simple… love it or return it!',
          alignclass: 'p-left'
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
  margin-top: 20px;
  max-width: 50%;
  font-size: 18px;
  font-weight: 400 !important;
  line-height: 25px;
  letter-spacing: 0.10em !important;
}

.btn-circle {
  border-radius: 20px !important;
}
</style>
