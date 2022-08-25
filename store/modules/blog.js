import blog from '../../data/blog';
import formatHelper from './../../mixins/resuable/format'
import _ from 'lodash';
import axios from 'axios';
const helper = new formatHelper;
const state = {
  blog: blog.data,
  bloglist: blog.data
}
// getters
const getters = {
  getblogTag: (state) => {
    const uniqueTag = []
    const blogTag = []
    state.bloglist.map((blog, index) => {
      if (blog.tags) {
        blog.tags.map((tag) => {
          const index = uniqueTag.indexOf(tag)
          if (index === -1) uniqueTag.push(tag)
        })
      }
    })
    for (let i = 0; i < uniqueTag.length; i++) {
      blogTag.push(uniqueTag[i])
    }
    return blogTag
  }
}
// mutations
const mutations = {
  setBloglist: (state) => {
    return state.bloglist
  },
}
// actions
const actions = {
  async fetchBlogs({ commit }, payload) {
    try {

      let url =  process.env.VUE_APP_BLOG_API_URL + "posts?";
      let params = {
        /* Default  number of blogs */
      };
   

      params = new URLSearchParams(_.pickBy(payload)).toString();
      
      let blogs = [];
      const result = await axios.get(url + params);

      if(result.data.length) {
        result.data.forEach((item) => {
          blogs.push(helper.formatBlog(item));
        });  
      }

      commit('setBloglist', blogs);

      state.bloglist = blogs;

      }
      catch (error) {
          alert(error)
          console.log(error)
      }
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
