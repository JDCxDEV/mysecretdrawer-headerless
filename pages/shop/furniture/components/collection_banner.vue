<template>
  <div>
    <div class="banner-furniture ratio_45">
      <div class="title2 section-t-space" style="padding-top: 30px;">
      <h2 class="title-inner2 ">Our Style</h2>
    </div>
      <div class="container">
        <div class="row partition3 text-center">
          <div class="col-md-3" v-for="(item, index) in items" :key="index">
            <a href="#">
              <div class="collection-banner p-right text-center">
                <div class="img-part" style="position: relative;"> 
                  <div class="collection-img"  :style="{'background-image': setBackground(item.imagepath)}"></div>
                </div>
                <div class="contain-banner banner-3">
                  <div>
                    <!-- <h4>{{item.subtitle}}</h4> -->
                  </div>
                </div>
              </div>
            </a>
             <h3 class="mt-2 text-danger"><b>{{item.title}}</b></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      items: [
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/H3373-2OK.jpg',
          title: 'Stocking and Legwear',
          subtitle: 'save 30%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R70334__2_hero.jpg',
          title: 'Teddies',
          subtitle: 'save 55%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/20180726155777017701.jpg',
          title: 'Corsets Bustiers',
          subtitle: 'save 55%'
        },        
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80068-1P-1-5.jpg',
          title: 'Pj & Warps',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80588-2-3.jpg',
          title: 'Long Sleeve Lace',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80636-2P-1-2.jpg',
          title: 'Babydoll & Chemise',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/P5138-4.jpg',
          title: 'Panties',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/H30311-2.jpg',
          title: 'Body Stockings',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80467-1.jpg',
          title: 'Leather Look',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/DY3258-1-3OK.jpg',
          title: 'Beach Wear',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/1-1-4.jpg',
          title: 'Bra Sets',
          subtitle: 'save 60%'
        },
        {
          imagepath: 'https://mysecretdrawer.com/wp-content/uploads/sites/13/2021/04/R80465-7.jpg',
          title: 'Gartered Lingerie	',
          subtitle: 'save 60%'
        },
      ]
    }
  },
  methods : {
    setBackground(image) {
      return `url(${image})`;  
    }
  }
}
</script>

<style>
.collection-img {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
}
</style>
