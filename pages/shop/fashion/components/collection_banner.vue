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
export default {
  data() {
    return {
      items: []
    }
  },

  mounted() {
    const CoCart = new CoCartAPI({
      url: "http://dev-msd.com/",
    });

    CoCart.get("products/categories")
    .then((response) => {
      // Successful request
      console.log(response.data);
      response.data.forEach((item) => {
        let category=  {
          title: item.name,
          imagepath : item.image ? item.image.src : require('@/assets/images/electronics/5.jpg'),
          subtitle: item.description
        };

        this.items.push(category);
      });
      console.log("Response Data:", response.data);
    })
    .catch((error) => {

    })
    .finally(() => {
      // Always executed.
    });
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
