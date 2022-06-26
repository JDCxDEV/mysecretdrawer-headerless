<template>
  <div>
    <section class="p-0">
      <div
        class="full-banner text-center p-left"
        v-bind:style="{ 'background-image': `url(${imagepath})` }"
      >
        <img :src="imagepath" alt class="bg-img d-none" />
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="banner-contain text-left">
                <h4 class="font-weight-bold text-white mb-2 custom-header">{{title}}</h4>
                <h5 class="text-white">{{subtitle}}</h5>
                <h5>{{text}}</h5>
                <button type="submit" class="btn btn-solid">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      imagepath: require('@/assets/images/parallax/1.jpg'),
      title: 'JUST ONE LIFE TO LIVE…',
      subtitle: 'Get an exciting new outfit of beautiful lingerie delivered to your door every month for just $34.95! Gorgeous designs assembled with the finest fabrics. Lingerie guaranteed to stimulate both mind and body. Just choose your preferred size, complete the order and we’ll do the rest!',
      text: 'Our promise is simple… love it or return it!'
    }
  }
}
</script>

<style>
.custom-header {
  font-size: 40px !important;
  letter-spacing: 2px !important;
  font-weight: 900 !important;
}
</style>