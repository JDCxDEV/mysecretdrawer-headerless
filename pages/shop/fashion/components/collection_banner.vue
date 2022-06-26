<template>
  <div>
    <section class="pb-0 ratio2_1 mb-4">
      <div class="container">
        <div class="row partition2">
          <div class="col-md-4" v-for="(item, index) in items" :key="index">
            <nuxt-link :to="{ path: '/collection/leftsidebar/all'}">
              <div class="collection-banner mb-4">
                <div class="img-part">
                  <img :src="item.imagepath" class="img-fluid" alt/>
                </div>
                <div class="contain-banner text-center">
                  <div>
                    <h4>{{item.subtitle}}</h4>
                    <h4>{{item.title}}</h4>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
import CoCartAPI from "@cocart/cocart-rest-api";
import fetchMixin from '../../../../mixins/cocart'
export default {
  data() {
    return {
      items: []
    }
  },

   mixins: [fetchMixin],

  mounted() {
    this.fetchCategories();
  },
}
</script>

<style>
.collection-banner .contain-banner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black !important;
  padding-left: 70px;
  padding-right: 70px;
}
</style>
