import formatHelper from "./../../mixins/reusable/format"; // Adjusted path based on common conventions
import _ from "lodash";
import axios from "axios";

const helper = new formatHelper();

const state = {
  current: {},
  bloglist: [],
  recentBlogList: [],
};

// getters
const getters = {
  getblogTag: (state) => {
    const blogTag = [];

    state.bloglist.forEach((blog) => {
      if (blog.categories) {
        blog.categories.forEach((tag) => {
          blogTag.push(tag);
        });
      }
    });

    return Array.from(new Set(blogTag));
  },
};

// mutations
const mutations = {
  setBloglist: (state, payload) => {
    state.bloglist = payload;
  },
  setRecentBloglist: (state, payload) => {
    state.recentBlogList = payload;
  },
  setCurrentBlog: (state, payload) => {
    state.current = payload;
  },
};

// actions
const actions = {
  async fetchBlogs({ commit }, payload) {
    try {
      let url = `${process.env.VUE_APP_BLOG_API_URL}posts`; // Adjusted URL concatenation

      let params = {
        // Default parameters for blog posts query
      };

      params = new URLSearchParams(_.pickBy(payload.params)).toString();

      const response = await axios.get(`${url}?${params}`);

      let blogs = response.data.map((item) => helper.formatBlog(item)); // Using map for transformation

      if (payload.type === "list") {
        commit("setBloglist", blogs);
      } else if (payload.type === "single" && blogs.length > 0) {
        commit("setCurrentBlog", blogs[0]);
      } else {
        commit("setRecentBloglist", blogs);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
