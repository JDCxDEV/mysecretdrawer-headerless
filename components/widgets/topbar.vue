<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="header-contact">
            <ul>
              <li>Welcome to Our store Multikart</li>
              <li>
                <i class="fa fa-phone" aria-hidden="true"></i>Call Us: 123 - 456 - 7890
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="mobile-wishlist">
              <nuxt-link :to="{ path: '/page/account/wishlist' }">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account">
              <i class="fa fa-user" aria-hidden="true"></i> 
              <template v-if="validated">
                {{ user.first_name }} {{ user.last_name}}
              </template>
              <template v-else>
                My Account
              </template>

              <ul class="onhover-show-div">
                <li>
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
