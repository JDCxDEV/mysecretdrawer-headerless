<template>
  <div class="top-header" style="background-color: #F40847;color: white !important;" >
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact text-white" >
            <ul>
              <li><a style="color: white !important;" href="collection/all">SHOP</a></li>
              <li><a style="color: white !important;" href="collection/all">CONTACT US</a></li>
              <li><a style="color: white !important;" href="collection/all">FAQS</a></li>
              <li><a style="color: white !important;" href="collection/all">PRIVACY & SECURITY</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown"  style="color: white !important;" >
            <li class="mobile-wishlist"  style="color: white !important;">
              <nuxt-link :to="{ path: '/page/account/wishlist' }">
                <i   style="color: white !important;" class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account"  style="color: white !important;">
              <i class="fa fa-user" aria-hidden="true"></i> 
              <template v-if="validated">
                {{ user.first_name }} {{ user.last_name}}
              </template>
              <template v-else>
                My Account
              </template>

              <ul class="onhover-show-div">
                <li v-if="validated">
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">Dashboard</nuxt-link>
                </li>
                <li>
                  <a v-if="validated" @click="logout"> Logout </a>
                  <nuxt-link v-if="!validated" :to="{ path: '/page/account/login-firebase' }">Login</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import UserAuth from '../../pages/page/account/auth/auth'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('user/unsetUserDetails').then(() =>{
        this.$router.push({path: '/page/account/login'});
      });
    },
  },
  computed: {
    ...mapGetters({
      validated: 'user/validated',
      user: 'user/user',
    }),
  },
}
</script>

<style>
.top-header .header-contact {
    padding: 10px 0;
}
.top-header .header-dropdown li {
    padding: 10px 25px;
    padding-right: 20px;
}
</style>