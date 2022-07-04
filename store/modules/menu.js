import Menu from '../../data/menu';
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
  url: process.env.VUE_APP_API_URL,
});

const state = {
  data: Menu.data
}

// getters
const getters = {
  getMenus: (state) => state.data,
}

// mutations
const mutations = {
  SET_MENUS(state, data) {
    state.data = data
  }        
}

// actions
const actions = {
  async fetchCategories({ commit }) {
    try {
      const  result = await CoCart.get("products/categories",{
        exclude: 17
      });

      let categories = [];
      result.data.forEach((item) => {
        let category = { "path": "/collection/leftsidebar/" + item.slug, "title": item.name.replace("&amp;", "&") , "type": "link" };
        categories.push(category);
      });

      let home_tab = {
        title: "Home", "type": "sub", "badgeValue": "new", "active": false
      };

      let categories_tab = {
        title: "Shop", "type": "sub", "active": false, 
        children: categories
      };

      let blogs_tab = {
        title: "Blog", "type": "sub", "active": false, 
        children: [
          { path: "/blog/blog-leftsidebar", "title": "Left Sidebar", "type": "link" },
          { path: "/blog/blog-rightsidebar", "title": "Right Sidebar", "type": "link" },
          { path: "/blog/blog-nosidebar", "title": "No Sidebar", "type": "link" },
          { path: "/blog/blog-detail", "title": "Blog details", "type": "link" }
        ]
      }

      let temp_data = Menu.data;

      temp_data = [
        home_tab,
        categories_tab,
        blogs_tab,
      ];

      commit('SET_MENUS', temp_data);

      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
