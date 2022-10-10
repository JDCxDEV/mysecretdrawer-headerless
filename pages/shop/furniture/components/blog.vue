<template>
<div>
  <section class="blog blog-2 section-b-space mt-4" >
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="title1">
                    <!-- <h4>{{subtitle}}</h4> -->
                    <h2 class="title-inner1 v2" style="margin-top: -50px;"></h2>
                    <h2 class="title-inner1" style="margin-top: -20px;">{{title}}</h2>
                </div>
                <div v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(blog,index) in bloglist" :key="index">
                <a :href="'/blog/' + blog.slug">
                  <div class="classic-effect">
                    <div>
                      <img
                      
                        :src="blog.image"
                        class="collection-img "
                        alt
                      />
                    </div>
                    <span></span>
                  </div>
                </a>
                <div class="blog-details">
                  <h4>{{blog.date}}</h4>
                  <a :href="'/blog/' + blog.slug">
                    <p>{{blog.display_title}}</p>
                  </a>
                  <hr class="style1" />
                  <h6>by: {{ blog.author_name }} , {{ blog.comment_count}} Comment(s)</h6>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</section>
</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
      title: 'My Secret Stories',
      subtitle: 'My Secret Stories',
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          } 
        },
      },
      
      bloglist: [],
    }
  },
  computed: mapState({
    bloglistRaw: state => state.blog.recentBlogList
  }),
  methods: {
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    }
  },


  async mounted() {

    let params = {
      params: {
        per_page:4,
        order: 'desc',
      },
    }
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      this.fetchCompeteData(this.bloglistRaw);
    });
  },

  methods: {
    async fetchCompeteData(item) {
      let blogs = [];
      await Promise.all(item.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
          item.thumbnail = response.data.media_details.sizes.thumbnail.source_url;
          item.medium = response.data.media_details.sizes.medium.source_url;
        }).then(() =>{
          axios.get(item.author_link).then( response =>{
            item.author_name = response.data.name;
          }).then(() =>{
          axios.get(item.replies_link).then( response =>{
            item.comment_count = response.data.length;
          })
          blogs.push(item);
        })
        })
  
      ));
      this.bloglist = blogs;
    }
  }
}
</script>


<style>
  .collection-img {
    display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;

  }

.title1 .title-inner1:after {
    position: absolute;
    height: 5px;
    width: 150px;
    background-color: #ff4c3b;
    background-color: var(--theme-deafult);
    content: "";
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 0;
}
  </style>
  