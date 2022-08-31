<template>
  <div>
    <Header />
    <Breadcrumbs title="Blog" />
    <section class="blog-detail-page section-b-space ratio2_3">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 blog-detail">
            <div class="container">
              <div class="row">
                <div class="col-sm-2 blog-detail">
              </div>
              <div class="col-sm-8 blog-detail">
                <img :src='blog.image' class="img-fluid" alt="blog" />
              </div>
              </div>
            </div>
            <h3>{{ blog.display_title }}</h3>
            <ul class="post-social">
              <li>{{ blog.date }}</li>
              <li>Posted By : {{ blog.author_name }}</li>
              <li>
                <i class="fa fa-comments"></i>  Comment(s) {{ blog.comment_count }}
              </li>
            </ul>
            <div v-html="blog.content.rendered"></div>
          
          </div>
        </div>

        <div class="row section-b-space" style="display: none;">
          <div class="col-sm-12">
            <ul class="comment-section">
              <li>
                <div class="media">
                  <img :src='"@/assets/images/avtar.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img :src='"@/assets/images/2.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <img :src='"@/assets/images/20.jpg"' alt="Generic placeholder image" />
                  <div class="media-body">
                    <h6>
                      Mark Jecno
                      <span>( 12 Jannuary 2018 at 1:30AM )</span>
                    </h6>
                    <p>Donec rhoncus massa quis nibh imperdiet dictum. Vestibulum id est sit amet felis fringilla bibendum at at leo. Proin molestie ac nisi eu laoreet. Integer faucibus enim nec ullamcorper tempor. Aenean nec felis dui. Integer tristique odio mi, in volutpat metus posuere eu. Aenean suscipit ipsum nunc, id volutpat lorem hendrerit ac. Sed id elit quam. In ac mauris arcu. Praesent eget lectus sit amet diam vestibulum varius. Suspendisse dignissim mattis leo, nec facilisis erat tempor quis. Vestibulum eu vestibulum ex.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="row blog-contact" style="display: none;">
          <div class="col-sm-12">
            <h2>Leave Your Comment</h2>
            <form class="theme-form">
              <div class="form-row">
                <div class="col-md-12">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your name"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="email">Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" required />
                </div>
                <div class="col-md-12">
                  <label for="exampleFormControlTextarea1">Comment</label>
                  <textarea
                    class="form-control"
                    placeholder="Write Your Comment"
                    id="exampleFormControlTextarea1"
                    rows="6"
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-solid" type="submit">Post Comment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from '../../components/header/header2'
import Footer from '../../components/footer/footer1'
import Breadcrumbs from '../../components/widgets/breadcrumbs'
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  components: {
    Header,
    Breadcrumbs,
    Footer
  },

  computed: mapState({
    current: state => state.blog.current
  }),

  data() {
    return {
      blog: {
        content: {

        }
      },
    }
  },
  async mounted() {
    let params = {
      params : {
        per_page: 30,
        slug: this.$route.params.id,
      },
      type: 'single'
    };
    this.$store.dispatch('blog/fetchBlogs', params).then( ()=>{
      let blog = [];
      blog.push(this.current);
      this.fetchCompeteData(blog);
    });
  },
  
  methods: {
    async fetchCompeteData(current_blogs) {
      let blog = {};
    
      await Promise.all(current_blogs.map(item => 
        axios.get(item.image_link).then( response =>{
          item.image = response.data.guid.rendered;
          item.thumbnail = response.data.media_details.sizes.thumbnail.source_url;
        }).then(() =>{
          axios.get(item.author_link).then( response =>{
            item.author_name = response.data.name;
          }).then(() =>{
          axios.get(item.replies_link).then( response =>{
            item.comment_count = response.data.length;
            blog = item;

          console.log(item)
          this.blog = blog;
          })
        
        })
        })
      ));

      
    }
  }
}
</script>
