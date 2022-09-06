<template>

  <div id="mySidenav" class="sidenav" :class="{ openSide:leftSidebarVal }">
    <a class="sidebar-overlay" @click="closeLeftBar(leftSidebarVal)"></a>
    <nav>
      <a @click="closeLeftBar(leftSidebarVal)">
        <div class="sidebar-back text-left">
          <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
        </div>
      </a>
      <!-- Sample menu definition -->
      <ul id="sub-menu" class="sidebar-menu">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="javascript:void(0)" @click="setActive('bags')">shop
            <span class="sub-arrow"></span>
          </a>
          <ul :class="{ opensub1: isActive('bags') }" style="width:250px;">
            <template v-for="category in categories">
              <li>
                <a :href="category.path">{{ category.title }}</a>
              </li>
            </template>
          </ul>
        </li>
        <li>
          <a href="/blog">Blogs</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      activeItem: 'clothing'
    }
  },
  computed: {
    ...mapState({
      categories: state => state.menu.categories,
    }),
  },
  mounted() {
    this.$store.dispatch('menu/getCategories')
  },
  methods: {
    closeLeftBar(val) {
      val = false
      this.$emit('closeVal', val)
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = ''
      } else {
        this.activeItem = menuItem
      }
    }
  }
}
</script>
