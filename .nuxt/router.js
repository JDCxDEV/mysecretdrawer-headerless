import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4a16a73b = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _a2ed480a = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _4bd2b981 = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _37b668ac = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _24ac6eb5 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _6113fd57 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _cb576208 = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _3df88e06 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _4ca4628e = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _30f8fe44 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _e726d884 = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _142efd42 = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _0c84ef6c = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _f70b0cc2 = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _7d44dc7c = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _04dfd259 = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _b4a3a9b0 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _53a84734 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _6b33e516 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _472b4b36 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _e451dcf4 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _15341ae6 = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _08c837d8 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _45157f64 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _66de5cdc = () => interopDefault(import('..\\pages\\shop\\bags\\index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _613d7121 = () => interopDefault(import('..\\pages\\shop\\beauty\\index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _3c8081c8 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _513f6742 = () => interopDefault(import('..\\pages\\shop\\fashion\\index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _7e9f345a = () => interopDefault(import('..\\pages\\shop\\fashion-2\\index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _f35e4c8e = () => interopDefault(import('..\\pages\\shop\\fashion-3\\index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _4d1475e2 = () => interopDefault(import('..\\pages\\shop\\flower\\index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _6f6672a5 = () => interopDefault(import('..\\pages\\shop\\furniture\\index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _5c6666fc = () => interopDefault(import('..\\pages\\shop\\gym\\index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _f3f23498 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _38acc750 = () => interopDefault(import('..\\pages\\shop\\kids\\index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _5aaf1c29 = () => interopDefault(import('..\\pages\\shop\\pets\\index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _5a4d706f = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _3674639c = () => interopDefault(import('..\\pages\\shop\\tools\\index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _1c96c42a = () => interopDefault(import('..\\pages\\shop\\vegetables\\index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _b97c6fb0 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _3965284b = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _098577bf = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _4d2b91c2 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _3e6c7ac5 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _43a35ff1 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _4e753bb6 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _5c2583cc = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _395f4e0c = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _7dfa54ac = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _4bcad8fa = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _fd1934bc = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _54c2e878 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _b1858ebc = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _b1695fba = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _144b6dba = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _5f4ccd0c = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _2b4b629d = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _2d9a1f1e = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _067ee825 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _19cffd83 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _513c9ae6 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _7d49abaa = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _7679a397 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _10ef7be4 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _4bc09a00 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _4ba46afe = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _4b883bfc = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _60757db6 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _168c2692 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _ee034890 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _097a56ec = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _10394a3f = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _b06c207e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _244eaf1d = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _ba676314 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _909d13ae = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _27033b0f = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _4ecd2560 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _12ca4e20 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _1afb2b32 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _2a1bb428 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _79030c84 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _b113a544 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _c86e237e = () => interopDefault(import('..\\pages\\shop\\bags\\components\\categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _7f9dc31c = () => interopDefault(import('..\\pages\\shop\\bags\\components\\instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _52ea0078 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _7ee90c0c = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _761cafe4 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _cb2f7b32 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _20cef386 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _583dd58e = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _67e136aa = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _478877d6 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _2f4cb990 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _0b33bbce = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _54669047 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _2cc56361 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _6fafce8e = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _159db5c6 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _0c218d6a = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _e3091e48 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _4244d626 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _615d95e4 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _d92059be = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _e8e2b6c2 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _df5c4b2a = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _6437c7f0 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _39e4a616 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _0fbef1a0 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _2d8734f6 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _69fd673b = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _757317a4 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _cf7ff82e = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _98b9fe28 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _6a5a990a = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _4136fb3c = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _8e0ebd12 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _68a97cba = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _7f2d3dd8 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _ef02b7ec = () => interopDefault(import('..\\pages\\shop\\flower\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _7033a827 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _bd227128 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _e30ee132 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _6ef1e194 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _1d83bfd2 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _50f82978 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _2b56b935 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _8c4d1b32 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _2c1c4bea = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _56e4c6de = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _38f63834 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _67f5787e = () => interopDefault(import('..\\pages\\shop\\gym\\components\\blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _a580fce2 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _09ff4486 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _c42cb6d2 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _586f6a98 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _6e3b6d86 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _6c0f681c = () => interopDefault(import('..\\pages\\shop\\gym\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _3f81f022 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _ee095984 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _817a3ea4 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _01b9ad23 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _b33df47a = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _3c9b9382 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _783114f6 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _28ea0f95 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _af51b26c = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _757b064c = () => interopDefault(import('..\\pages\\shop\\kids\\components\\instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _ac29fcc6 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _ca836208 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _6f630eb9 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _5283dd2e = () => interopDefault(import('..\\pages\\shop\\kids\\components\\slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _20d3b531 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _93128088 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _38424884 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _f62cbd3a = () => interopDefault(import('..\\pages\\shop\\pets\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _52e4fc64 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _79b7b5a0 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _3b2484e5 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _2ac46dd4 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _374c192b = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _4bb108ce = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _04b98ff2 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _92491b8a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _922cec88 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _65b4995a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _4c92ca88 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _3bb26a7e = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _e1f9f00e = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _52aa3712 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _187c6d3c = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _1d1372aa = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _4a1f0581 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _a608358c = () => interopDefault(import('..\\pages\\shop\\tools\\components\\category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _4618a2e9 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _06851f8a = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _18bae71a = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _45e1e7c9 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _68e064ae = () => interopDefault(import('..\\pages\\shop\\tools\\components\\service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _2de85ec6 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _2d04110e = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _84ba33a2 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _a4961204 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _a1c4f32a = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _68eb0eae = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _506c2592 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _7c6be3d2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _7a0151a4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _2db93ea8 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _794354e9 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _752acdb2 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _01027c75 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _64c384e1 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _7fce0ae4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _cd29a0de = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _b32470d4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _c5bc1184 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _c794ed5c = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _12cdf2ce = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _281db493 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/multikart/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog/blog-detail",
    component: _4a16a73b,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _a2ed480a,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _4bd2b981,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _37b668ac,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _24ac6eb5,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _6113fd57,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _cb576208,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _3df88e06,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _4ca4628e,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _30f8fe44,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _e726d884,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _142efd42,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _0c84ef6c,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _f70b0cc2,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _7d44dc7c,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _04dfd259,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _b4a3a9b0,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _53a84734,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _6b33e516,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _472b4b36,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _e451dcf4,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _15341ae6,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _08c837d8,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _45157f64,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _66de5cdc,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _613d7121,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _3c8081c8,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _513f6742,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _7e9f345a,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _f35e4c8e,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _4d1475e2,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _6f6672a5,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _5c6666fc,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _f3f23498,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _38acc750,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _5aaf1c29,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _5a4d706f,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _3674639c,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _1c96c42a,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _b97c6fb0,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _3965284b,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _098577bf,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _4d2b91c2,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _3e6c7ac5,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _43a35ff1,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _4e753bb6,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _5c2583cc,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _395f4e0c,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _7dfa54ac,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _4bcad8fa,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _fd1934bc,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _54c2e878,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _b1858ebc,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _b1695fba,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _144b6dba,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _5f4ccd0c,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _2b4b629d,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _2d9a1f1e,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _067ee825,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _19cffd83,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _513c9ae6,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _7d49abaa,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _7679a397,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _10ef7be4,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _4bc09a00,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _4ba46afe,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _4b883bfc,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _60757db6,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _168c2692,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _ee034890,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _097a56ec,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _10394a3f,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _b06c207e,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _244eaf1d,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _ba676314,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _909d13ae,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _27033b0f,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _4ecd2560,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _12ca4e20,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _1afb2b32,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _2a1bb428,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _79030c84,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _b113a544,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _c86e237e,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _7f9dc31c,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _52ea0078,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _7ee90c0c,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _761cafe4,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _cb2f7b32,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _20cef386,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _583dd58e,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _67e136aa,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _478877d6,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _2f4cb990,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _0b33bbce,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _54669047,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _2cc56361,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _6fafce8e,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _159db5c6,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _0c218d6a,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _e3091e48,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _4244d626,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _615d95e4,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _d92059be,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _e8e2b6c2,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _df5c4b2a,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _6437c7f0,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _39e4a616,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _0fbef1a0,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _2d8734f6,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _69fd673b,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _757317a4,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _cf7ff82e,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _98b9fe28,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _6a5a990a,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _4136fb3c,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _8e0ebd12,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _68a97cba,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _7f2d3dd8,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _ef02b7ec,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _7033a827,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _bd227128,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _e30ee132,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _6ef1e194,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _1d83bfd2,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _50f82978,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _2b56b935,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _8c4d1b32,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _2c1c4bea,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _56e4c6de,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _38f63834,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _67f5787e,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _a580fce2,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _09ff4486,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _c42cb6d2,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _586f6a98,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _6e3b6d86,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _6c0f681c,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _3f81f022,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _ee095984,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _817a3ea4,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _01b9ad23,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _b33df47a,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _3c9b9382,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _783114f6,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _28ea0f95,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _af51b26c,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _757b064c,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _ac29fcc6,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _ca836208,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _6f630eb9,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _5283dd2e,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _20d3b531,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _93128088,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _38424884,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _f62cbd3a,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _52e4fc64,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _79b7b5a0,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _3b2484e5,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _2ac46dd4,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _374c192b,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _4bb108ce,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _04b98ff2,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _92491b8a,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _922cec88,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _65b4995a,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _4c92ca88,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _3bb26a7e,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _e1f9f00e,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _52aa3712,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _187c6d3c,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _1d1372aa,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _4a1f0581,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _a608358c,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _4618a2e9,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _06851f8a,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _18bae71a,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _45e1e7c9,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _68e064ae,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _2de85ec6,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _2d04110e,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _84ba33a2,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _a4961204,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _a1c4f32a,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _68eb0eae,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _506c2592,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _7c6be3d2,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _7a0151a4,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _2db93ea8,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _794354e9,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _752acdb2,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _01027c75,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _64c384e1,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _7fce0ae4,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _cd29a0de,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _b32470d4,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _c5bc1184,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _c794ed5c,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _12cdf2ce,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _281db493,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
