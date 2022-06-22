<template>
  <div>
    <div class="title1 section-t-space">
      <h4>{{subtitle}}</h4>
      <h2 class="title-inner1">{{title}}</h2>
    </div>
    <section class="section-b-space p-t-0 ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="theme-tab">
              <b-tabs content-class="mt-3">
                <b-tab
                  :title="collection.name"
                  v-for="(collection,index) in category"
                  :key="index"
                >
                  <div class="no-slider row">
                    <div
                      class="product-box"
                      v-for="(product,index) in products"
                      :key="index"
                    >
                    <productBox1
                      @opencartmodel="showCartModal"
                      @showCompareModal="showcomparemodal"
                      @openquickview="showquickview"
                      @showalert="alert"
                      @alertseconds="alert"
                      :product="product"
                      :index="index"
                    />
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import productBox1 from '../../../../components/product-box/product-box1'
import CoCartAPI from "@cocart/cocart-rest-api";
import axios from 'axios'

export default {
  components: {
    productBox1
  },
  data() {
    return {
      title: 'special products',
      subtitle: 'exclusive products',
      showCart: false,
      showquickviewmodel: false,
      showcomapreModal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
      category: [],
      products: [],
    }
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.fetchCategories();
    },
    fetchProducts() {
     axios
      .get('http://dev-msd.com/wp-json/cocart/v2/products')
      .then((response) => { 
          this.products = response.data.products;
       })
    },

    fetchCategories() {
     axios
      .get('http://dev-msd.com/wp-json/cocart/v2/products/categories')
      .then((response) => { 
          this.category = response.data;
          this.fetchProducts();
       })
    },
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.categories.find(i => i.id === collection.id)) {
          return item
        }
      })
    },
    alert(item) {
      this.dismissCountDown = item
    },
    showCartModal(item, productData) {
      this.showCart = item
      this.cartproduct = productData
      this.$emit('openCart', this.showCart, this.cartproduct)
    },
    showquickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
      this.$emit('openQuickview', this.showquickviewmodel, this.quickviewproduct)
    },
    showcomparemodal(item, productData) {
      this.showcomapreModal = item
      this.comapreproduct = productData
      this.$emit('openCompare', this.showcomapreModal, this.comapreproduct)
    }
  }
}
</script>
