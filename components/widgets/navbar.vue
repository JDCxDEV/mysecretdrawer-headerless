<template>
  <div>
    <!-- Main Navigation -->
    <div class="main-navbar">
      <div id="mainnav">
        <!-- Mobile Toggle Button -->
        <div
          class="toggle-nav"
          :class="{ 'toggle-button': leftSidebarVal }"
          @click="mobilenav"
        >
          <i class="fa fa-bars sidebar-bar"></i>
        </div>

        <!-- Navigation Menu -->
        <ul class="nav-menu" :class="{ opennav: openmobilenav }">
          <!-- Back Button for Mobile Navigation -->
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav = false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>

          <!-- Dynamic Menu Items -->
          <li
            v-for="(menuItem, index) in menulist"
            :key="index"
            :class="menuItem.megamenu ? 'mega-menu' : 'dropdown'"
          >
            <!-- Menu Link -->
            <a
              :href="menuItem.path || '#'"
              class="nav-link"
              @click="setActive(menuItem.title)"
            >
              {{ menuItem.title }}
              <span class="sub-arrow" v-if="menuItem.children || menuItem.megamenu"></span>
            </a>

            <!-- Submenu -->
            <ul
              class="nav-submenu"
              :class="{ opensubmenu: isActive(menuItem.title) }"
              v-if="menuItem.children"
            >
              <li
                v-for="(childrenItem, index) in menuItem.children"
                :key="index"
                @click="setCategory(childrenItem)"
              >
                <a
                  v-if="childrenItem.children"
                  href="javascript:void(0)"
                  @click="setActiveChild(childrenItem.title)"
                >
                  {{ childrenItem.title }}
                  <span class="sub-arrow" v-if="childrenItem.children"></span>
                </a>
                <nuxt-link
                  v-else
                  :to="{ path: childrenItem.path }"
                  @click="setActiveChild(childrenItem.title)"
                >
                  {{ childrenItem.title }}
                </nuxt-link>

                <!-- Sub-Child Menu -->
                <ul
                  class="nav-sub-childmenu"
                  :class="{ opensubchild: isActiveChild(childrenItem.title) }"
                  v-if="childrenItem.children"
                >
                  <li
                    v-for="(childrenSubItem, index) in childrenItem.children"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: childrenSubItem.path }">
                      {{ childrenSubItem.title }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>

            <!-- Mega Menu -->
            <div
              class="mega-menu-container"
              :class="{ opensubmenu: isActive('portfolio') }"
              v-if="menuItem.megamenu"
            >
              <div class="container">
                <div class="row">
                  <div
                    class="col mega-box"
                    v-for="(childrenItem, index) in menuItem.children"
                    :key="index"
                  >
                    <div class="link-section">
                      <div
                        class="menu-title"
                        @click="setActivesubmega('portfolio')"
                      >
                        <h5>
                          {{ childrenItem.title }}
                          <span class="sub-arrow"></span>
                        </h5>
                      </div>
                      <div
                        class="menu-content"
                        :class="{ opensubmegamenu: isActivesubmega('portfolio') }"
                      >
                        <ul>
                          <li
                            v-for="(childrenSubItem, index) in childrenItem.children"
                            :key="index"
                          >
                            <nuxt-link :to="{ path: childrenSubItem.path }">
                              {{ childrenSubItem.title }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["leftSidebarVal"],
  data() {
    return {
      openmobilenav: false,
      activeItem: "home",
      activeChildItem: "fashion 1",
      activemegaChild: "portfolio",
    };
  },
  computed: {
    ...mapState({
      menulist: (state) => state.menu.data,
      hasFilterItem: (state) =>
        state.filter.filterItems.length ? true : false,
    }),
  },
  mounted() {
    this.$store.dispatch("menu/fetchCategories");
    if (!this.hasFilterItem) {
      this.$store.dispatch("filter/fetchFilterItems");
    }
  },
  methods: {
    mobilenav() {
      this.openmobilenav = !this.openmobilenav;
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = this.activeItem === menuItem ? "" : menuItem;
    },
    isActiveChild(menuChildItem) {
      return this.activeChildItem === menuChildItem;
    },
    setActiveChild(menuChildItem) {
      this.activeChildItem =
        this.activeChildItem === menuChildItem ? "" : menuChildItem;
    },
    isActivesubmega(megaChildItem) {
      return this.activemegaChild === megaChildItem;
    },
    setActivesubmega(megaChildItem) {
      this.activemegaChild =
        this.activemegaChild === megaChildItem ? "" : megaChildItem;
    },
    setCategory(item) {
      this.$store.dispatch("menu/setSelectedCategory", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
</style>

<style>
.main-menu .menu-left .navbar {
  padding: 20px 10px 20px 0 !important;
}
.main-menu .brand-logo {
  padding-top: 10px;
  padding-bottom: 10px;
}
.onhover-div {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
