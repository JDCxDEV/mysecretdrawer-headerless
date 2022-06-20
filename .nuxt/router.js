import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c8f5a4a = () => interopDefault(import('..\\pages\\blog\\blog-detail.vue' /* webpackChunkName: "pages/blog/blog-detail" */))
const _ad7c174a = () => interopDefault(import('..\\pages\\blog\\blog-leftsidebar.vue' /* webpackChunkName: "pages/blog/blog-leftsidebar" */))
const _2ad42c3e = () => interopDefault(import('..\\pages\\blog\\blog-nosidebar.vue' /* webpackChunkName: "pages/blog/blog-nosidebar" */))
const _407f3f4a = () => interopDefault(import('..\\pages\\blog\\blog-rightsidebar.vue' /* webpackChunkName: "pages/blog/blog-rightsidebar" */))
const _1f650715 = () => interopDefault(import('..\\pages\\collection\\full-width.vue' /* webpackChunkName: "pages/collection/full-width" */))
const _ca924e12 = () => interopDefault(import('..\\pages\\collection\\list-view.vue' /* webpackChunkName: "pages/collection/list-view" */))
const _19f5fa9c = () => interopDefault(import('..\\pages\\collection\\metro.vue' /* webpackChunkName: "pages/collection/metro" */))
const _48875d46 = () => interopDefault(import('..\\pages\\collection\\no-sidebar.vue' /* webpackChunkName: "pages/collection/no-sidebar" */))
const _079f23a4 = () => interopDefault(import('..\\pages\\collection\\right-sidebar.vue' /* webpackChunkName: "pages/collection/right-sidebar" */))
const _d1e0e704 = () => interopDefault(import('..\\pages\\collection\\sidebar-popup.vue' /* webpackChunkName: "pages/collection/sidebar-popup" */))
const _2b2fc41e = () => interopDefault(import('..\\pages\\collection\\six-grid.vue' /* webpackChunkName: "pages/collection/six-grid" */))
const _0ee795a2 = () => interopDefault(import('..\\pages\\collection\\three-grid.vue' /* webpackChunkName: "pages/collection/three-grid" */))
const _0914d3ea = () => interopDefault(import('..\\pages\\page\\404.vue' /* webpackChunkName: "pages/page/404" */))
const _1b2d5d3f = () => interopDefault(import('..\\pages\\page\\about.vue' /* webpackChunkName: "pages/page/about" */))
const _9a218648 = () => interopDefault(import('..\\pages\\page\\collection.vue' /* webpackChunkName: "pages/page/collection" */))
const _f6fd040e = () => interopDefault(import('..\\pages\\page\\coming-soon.vue' /* webpackChunkName: "pages/page/coming-soon" */))
const _95f51270 = () => interopDefault(import('..\\pages\\page\\faq.vue' /* webpackChunkName: "pages/page/faq" */))
const _5c9a5674 = () => interopDefault(import('..\\pages\\page\\lookbook.vue' /* webpackChunkName: "pages/page/lookbook" */))
const _edcdae94 = () => interopDefault(import('..\\pages\\page\\order-success.vue' /* webpackChunkName: "pages/page/order-success" */))
const _f25648d4 = () => interopDefault(import('..\\pages\\page\\review.vue' /* webpackChunkName: "pages/page/review" */))
const _64febc34 = () => interopDefault(import('..\\pages\\page\\search.vue' /* webpackChunkName: "pages/page/search" */))
const _2b1052ed = () => interopDefault(import('..\\pages\\page\\typography.vue' /* webpackChunkName: "pages/page/typography" */))
const _57f657b4 = () => interopDefault(import('..\\pages\\product\\bundle-product.vue' /* webpackChunkName: "pages/product/bundle-product" */))
const _62fac304 = () => interopDefault(import('..\\pages\\product\\four-image.vue' /* webpackChunkName: "pages/product/four-image" */))
const _4c327d32 = () => interopDefault(import('..\\pages\\shop\\bags\\index.vue' /* webpackChunkName: "pages/shop/bags/index" */))
const _7f22b4c1 = () => interopDefault(import('..\\pages\\shop\\beauty\\index.vue' /* webpackChunkName: "pages/shop/beauty/index" */))
const _23b5277c = () => interopDefault(import('..\\pages\\shop\\electronics-1\\index.vue' /* webpackChunkName: "pages/shop/electronics-1/index" */))
const _76237cbf = () => interopDefault(import('..\\pages\\shop\\fashion\\index.vue' /* webpackChunkName: "pages/shop/fashion/index" */))
const _7957ccba = () => interopDefault(import('..\\pages\\shop\\fashion-2\\index.vue' /* webpackChunkName: "pages/shop/fashion-2/index" */))
const _fded1bce = () => interopDefault(import('..\\pages\\shop\\fashion-3\\index.vue' /* webpackChunkName: "pages/shop/fashion-3/index" */))
const _6af9b982 = () => interopDefault(import('..\\pages\\shop\\flower\\index.vue' /* webpackChunkName: "pages/shop/flower/index" */))
const _6a1f0b05 = () => interopDefault(import('..\\pages\\shop\\furniture\\index.vue' /* webpackChunkName: "pages/shop/furniture/index" */))
const _dbde7148 = () => interopDefault(import('..\\pages\\shop\\gym\\index.vue' /* webpackChunkName: "pages/shop/gym/index" */))
const _fe8103d8 = () => interopDefault(import('..\\pages\\shop\\jewellery\\index.vue' /* webpackChunkName: "pages/shop/jewellery/index" */))
const _8f631a20 = () => interopDefault(import('..\\pages\\shop\\kids\\index.vue' /* webpackChunkName: "pages/shop/kids/index" */))
const _4b5e706e = () => interopDefault(import('..\\pages\\shop\\pets\\index.vue' /* webpackChunkName: "pages/shop/pets/index" */))
const _623d8e62 = () => interopDefault(import('..\\pages\\shop\\shoes\\index.vue' /* webpackChunkName: "pages/shop/shoes/index" */))
const _a9efa808 = () => interopDefault(import('..\\pages\\shop\\tools\\index.vue' /* webpackChunkName: "pages/shop/tools/index" */))
const _4e0f118b = () => interopDefault(import('..\\pages\\shop\\vegetables\\index.vue' /* webpackChunkName: "pages/shop/vegetables/index" */))
const _17d59088 = () => interopDefault(import('..\\pages\\shop\\watch\\index.vue' /* webpackChunkName: "pages/shop/watch/index" */))
const _685928ab = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-list.vue' /* webpackChunkName: "pages/blog/widgets/blog-list" */))
const _063d1b5f = () => interopDefault(import('..\\pages\\blog\\widgets\\blog-sidebar.vue' /* webpackChunkName: "pages/blog/widgets/blog-sidebar" */))
const _11610a82 = () => interopDefault(import('..\\pages\\page\\account\\cart.vue' /* webpackChunkName: "pages/page/account/cart" */))
const _ca722336 = () => interopDefault(import('..\\pages\\page\\account\\checkout.vue' /* webpackChunkName: "pages/page/account/checkout" */))
const _3e5bf851 = () => interopDefault(import('..\\pages\\page\\account\\contact.vue' /* webpackChunkName: "pages/page/account/contact" */))
const _07b96285 = () => interopDefault(import('..\\pages\\page\\account\\dashboard.vue' /* webpackChunkName: "pages/page/account/dashboard" */))
const _5a6fbc2c = () => interopDefault(import('..\\pages\\page\\account\\forget-password.vue' /* webpackChunkName: "pages/page/account/forget-password" */))
const _fbd8ed4c = () => interopDefault(import('..\\pages\\page\\account\\login.vue' /* webpackChunkName: "pages/page/account/login" */))
const _6e60114a = () => interopDefault(import('..\\pages\\page\\account\\login-firebase.vue' /* webpackChunkName: "pages/page/account/login-firebase" */))
const _4683715a = () => interopDefault(import('..\\pages\\page\\account\\profile.vue' /* webpackChunkName: "pages/page/account/profile" */))
const _44644d7c = () => interopDefault(import('..\\pages\\page\\account\\register.vue' /* webpackChunkName: "pages/page/account/register" */))
const _31f8ff64 = () => interopDefault(import('..\\pages\\page\\account\\wishlist.vue' /* webpackChunkName: "pages/page/account/wishlist" */))
const _539d8dfc = () => interopDefault(import('..\\pages\\page\\compare\\compare-1.vue' /* webpackChunkName: "pages/page/compare/compare-1" */))
const _53815efa = () => interopDefault(import('..\\pages\\page\\compare\\compare-2.vue' /* webpackChunkName: "pages/page/compare/compare-2" */))
const _4dee495a = () => interopDefault(import('..\\pages\\page\\element\\banner.vue' /* webpackChunkName: "pages/page/element/banner" */))
const _88b17ea8 = () => interopDefault(import('..\\pages\\page\\element\\category.vue' /* webpackChunkName: "pages/page/element/category" */))
const _802dfa06 = () => interopDefault(import('..\\pages\\page\\element\\collection-banner.vue' /* webpackChunkName: "pages/page/element/collection-banner" */))
const _2b2858d1 = () => interopDefault(import('..\\pages\\page\\element\\home-slider.vue' /* webpackChunkName: "pages/page/element/home-slider" */))
const _48745085 = () => interopDefault(import('..\\pages\\page\\element\\logo-slider.vue' /* webpackChunkName: "pages/page/element/logo-slider" */))
const _1687a123 = () => interopDefault(import('..\\pages\\page\\element\\multi-slider.vue' /* webpackChunkName: "pages/page/element/multi-slider" */))
const _f68223a6 = () => interopDefault(import('..\\pages\\page\\element\\product-slider.vue' /* webpackChunkName: "pages/page/element/product-slider" */))
const _7a014f4a = () => interopDefault(import('..\\pages\\page\\element\\product-tabs.vue' /* webpackChunkName: "pages/page/element/product-tabs" */))
const _71323bf7 = () => interopDefault(import('..\\pages\\page\\element\\service.vue' /* webpackChunkName: "pages/page/element/service" */))
const _ea9b74a4 = () => interopDefault(import('..\\pages\\page\\portfolio\\masonary-fullwidth.vue' /* webpackChunkName: "pages/page/portfolio/masonary-fullwidth" */))
const _6ebd5360 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-2.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-2" */))
const _6ecb6ae1 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-3.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-3" */))
const _6ed98262 = () => interopDefault(import('..\\pages\\page\\portfolio\\mesonary-grid-4.vue' /* webpackChunkName: "pages/page/portfolio/mesonary-grid-4" */))
const _15d9c3d4 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-2-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-2-col" */))
const _ed50e5d2 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-3-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-3-col" */))
const _1d9bfc18 = () => interopDefault(import('..\\pages\\page\\portfolio\\portfolio-4-col.vue' /* webpackChunkName: "pages/page/portfolio/portfolio-4-col" */))
const _b891b168 = () => interopDefault(import('..\\pages\\product\\sidebar\\no-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/no-sidebar" */))
const _4993c442 = () => interopDefault(import('..\\pages\\product\\sidebar\\right-sidebar.vue' /* webpackChunkName: "pages/product/sidebar/right-sidebar" */))
const _6dedb93e = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-bottom.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-bottom" */))
const _d5f36a86 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-left.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-left" */))
const _490826d6 = () => interopDefault(import('..\\pages\\product\\three-column\\thumbnail-right.vue' /* webpackChunkName: "pages/product/three-column/thumbnail-right" */))
const _4e1eac6e = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\image-outside.vue' /* webpackChunkName: "pages/product/thumbnail-image/image-outside" */))
const _0dcca922 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\left-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/left-image" */))
const _80f67e00 = () => interopDefault(import('..\\pages\\product\\thumbnail-image\\right-image.vue' /* webpackChunkName: "pages/product/thumbnail-image/right-image" */))
const _41be4e80 = () => interopDefault(import('..\\pages\\page\\account\\auth\\auth.js' /* webpackChunkName: "pages/page/account/auth/auth" */))
const _19456392 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\banner.vue' /* webpackChunkName: "pages/shop/bags/components/banner" */))
const _774ef6f0 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\blog.vue' /* webpackChunkName: "pages/shop/bags/components/blog" */))
const _0da0ace4 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category.vue' /* webpackChunkName: "pages/shop/bags/components/category" */))
const _b2e6ce04 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\category2.vue' /* webpackChunkName: "pages/shop/bags/components/category2" */))
const _2ef2f1e1 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\categorytab.vue' /* webpackChunkName: "pages/shop/bags/components/categorytab" */))
const _7eb42ebc = () => interopDefault(import('..\\pages\\shop\\bags\\components\\instagram.vue' /* webpackChunkName: "pages/shop/bags/components/instagram" */))
const _369bfc18 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productcategoryslider.vue' /* webpackChunkName: "pages/shop/bags/components/productcategoryslider" */))
const _3143159a = () => interopDefault(import('..\\pages\\shop\\bags\\components\\productslider.vue' /* webpackChunkName: "pages/shop/bags/components/productslider" */))
const _0aba5044 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\services.vue' /* webpackChunkName: "pages/shop/bags/components/services" */))
const _ce9b0a72 = () => interopDefault(import('..\\pages\\shop\\bags\\components\\slider.vue' /* webpackChunkName: "pages/shop/bags/components/slider" */))
const _286871b4 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\about.vue' /* webpackChunkName: "pages/shop/beauty/components/about" */))
const _5ba964ce = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\blog.vue' /* webpackChunkName: "pages/shop/beauty/components/blog" */))
const _5f39684b = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\instagram.vue' /* webpackChunkName: "pages/shop/beauty/components/instagram" */))
const _4e2fb836 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/product-slider" */))
const _7cf74398 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\slider.vue' /* webpackChunkName: "pages/shop/beauty/components/slider" */))
const _1cf867a4 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\top-product-slider.vue' /* webpackChunkName: "pages/shop/beauty/components/top-product-slider" */))
const _5b0dd0a7 = () => interopDefault(import('..\\pages\\shop\\beauty\\components\\video-tutorial.vue' /* webpackChunkName: "pages/shop/beauty/components/video-tutorial" */))
const _511fabc1 = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/electronics-1/components/collection_banner" */))
const _a30fadce = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/electronics-1/components/product_tab" */))
const _167058bd = () => interopDefault(import('..\\pages\\shop\\electronics-1\\components\\slider.vue' /* webpackChunkName: "pages/shop/electronics-1/components/slider" */))
const _c168ddec = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/banner" */))
const _a08ab708 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection" */))
const _716b0d4d = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/fashion-2/components/collection-banner" */))
const _07996e44 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion-2/components/instagram" */))
const _65864381 = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\product.vue' /* webpackChunkName: "pages/shop/fashion-2/components/product" */))
const _1eb8a83f = () => interopDefault(import('..\\pages\\shop\\fashion-2\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-2/components/slider" */))
const _237bde0b = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion-3/components/banner" */))
const _b517a8e0 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_slider" */))
const _408be676 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion-3/components/product_tab" */))
const _ba2e1580 = () => interopDefault(import('..\\pages\\shop\\fashion-3\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion-3/components/slider" */))
const _2f5a5db6 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\banner.vue' /* webpackChunkName: "pages/shop/fashion/components/banner" */))
const _34fa3adb = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\blog.vue' /* webpackChunkName: "pages/shop/fashion/components/blog" */))
const _5bc32804 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/fashion/components/collection_banner" */))
const _6a567449 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\instagram.vue' /* webpackChunkName: "pages/shop/fashion/components/instagram" */))
const _59ded94c = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/logo_slider" */))
const _389b64aa = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/fashion/components/product_slider" */))
const _311a58c8 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\product_tab.vue' /* webpackChunkName: "pages/shop/fashion/components/product_tab" */))
const _4c22a517 = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\services.vue' /* webpackChunkName: "pages/shop/fashion/components/services" */))
const _67bfe85a = () => interopDefault(import('..\\pages\\shop\\fashion\\components\\slider.vue' /* webpackChunkName: "pages/shop/fashion/components/slider" */))
const _7d777638 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\blog.vue' /* webpackChunkName: "pages/shop/flower/components/blog" */))
const _2eba7c6a = () => interopDefault(import('..\\pages\\shop\\flower\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/flower/components/category_tab" */))
const _9d1fe872 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/flower/components/collection_banner" */))
const _3498cb0c = () => interopDefault(import('..\\pages\\shop\\flower\\components\\instagram.vue' /* webpackChunkName: "pages/shop/flower/components/instagram" */))
const _d5c06072 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/flower/components/product_slider" */))
const _52a8e9f4 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\services.vue' /* webpackChunkName: "pages/shop/flower/components/services" */))
const _f4487f12 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\slider.vue' /* webpackChunkName: "pages/shop/flower/components/slider" */))
const _7dbfc3a4 = () => interopDefault(import('..\\pages\\shop\\flower\\components\\top_products.vue' /* webpackChunkName: "pages/shop/flower/components/top_products" */))
const _2a6d24d5 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\blog.vue' /* webpackChunkName: "pages/shop/furniture/components/blog" */))
const _efcb83f2 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\category_tab.vue' /* webpackChunkName: "pages/shop/furniture/components/category_tab" */))
const _82ac776c = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/collection_banner" */))
const _8a44a61e = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/furniture/components/parallax_banner" */))
const _67bf8858 = () => interopDefault(import('..\\pages\\shop\\furniture\\components\\slider.vue' /* webpackChunkName: "pages/shop/furniture/components/slider" */))
const _64ad1c1e = () => interopDefault(import('..\\pages\\shop\\gym\\components\\blog.vue' /* webpackChunkName: "pages/shop/gym/components/blog" */))
const _98327c22 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/gym/components/collection-banner" */))
const _c2c63634 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\instagram.vue' /* webpackChunkName: "pages/shop/gym/components/instagram" */))
const _fcbea612 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/gym/components/logo-slider" */))
const _28cd2390 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\product-list.vue' /* webpackChunkName: "pages/shop/gym/components/product-list" */))
const _763f84dd = () => interopDefault(import('..\\pages\\shop\\gym\\components\\slider.vue' /* webpackChunkName: "pages/shop/gym/components/slider" */))
const _3aafe792 = () => interopDefault(import('..\\pages\\shop\\gym\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/gym/components/top-collection" */))
const _9f8ce87c = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\category.vue' /* webpackChunkName: "pages/shop/jewellery/components/category" */))
const _2f372b9e = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\instagram.vue' /* webpackChunkName: "pages/shop/jewellery/components/instagram" */))
const _b4da1de4 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/jewellery/components/parallax-banner" */))
const _42f610c3 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-slider" */))
const _a5ef73ba = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\product-tab.vue' /* webpackChunkName: "pages/shop/jewellery/components/product-tab" */))
const _a559a1bc = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\services.vue' /* webpackChunkName: "pages/shop/jewellery/components/services" */))
const _57117925 = () => interopDefault(import('..\\pages\\shop\\jewellery\\components\\slider.vue' /* webpackChunkName: "pages/shop/jewellery/components/slider" */))
const _11aa4996 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_banner.vue' /* webpackChunkName: "pages/shop/kids/components/collection_banner" */))
const _7697f26a = () => interopDefault(import('..\\pages\\shop\\kids\\components\\collection_slider.vue' /* webpackChunkName: "pages/shop/kids/components/collection_slider" */))
const _774e2f0c = () => interopDefault(import('..\\pages\\shop\\kids\\components\\instagram.vue' /* webpackChunkName: "pages/shop/kids/components/instagram" */))
const _3d15053d = () => interopDefault(import('..\\pages\\shop\\kids\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/kids/components/logo_slider" */))
const _8804fac8 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\parallax_banner.vue' /* webpackChunkName: "pages/shop/kids/components/parallax_banner" */))
const _159ee719 = () => interopDefault(import('..\\pages\\shop\\kids\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/kids/components/product_slider" */))
const _55ef6c6e = () => interopDefault(import('..\\pages\\shop\\kids\\components\\slider.vue' /* webpackChunkName: "pages/shop/kids/components/slider" */))
const _89def4de = () => interopDefault(import('..\\pages\\shop\\pets\\components\\blog.vue' /* webpackChunkName: "pages/shop/pets/components/blog" */))
const _f690e948 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\collection-banner.vue' /* webpackChunkName: "pages/shop/pets/components/collection-banner" */))
const _692767b8 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\logo-slider.vue' /* webpackChunkName: "pages/shop/pets/components/logo-slider" */))
const _b3ae55fa = () => interopDefault(import('..\\pages\\shop\\pets\\components\\parallax-banner.vue' /* webpackChunkName: "pages/shop/pets/components/parallax-banner" */))
const _7cc95a2e = () => interopDefault(import('..\\pages\\shop\\pets\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/pets/components/product-slider" */))
const _7d2344e0 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\slider.vue' /* webpackChunkName: "pages/shop/pets/components/slider" */))
const _3d3f4576 = () => interopDefault(import('..\\pages\\shop\\pets\\components\\top-collection.vue' /* webpackChunkName: "pages/shop/pets/components/top-collection" */))
const _290ea634 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\about.vue' /* webpackChunkName: "pages/shop/shoes/components/about" */))
const _36ad566a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\blog.vue' /* webpackChunkName: "pages/shop/shoes/components/blog" */))
const _49fb412e = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\brand.vue' /* webpackChunkName: "pages/shop/shoes/components/brand" */))
const _068cb8b2 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category.vue' /* webpackChunkName: "pages/shop/shoes/components/category" */))
const _cadb0aca = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category2.vue' /* webpackChunkName: "pages/shop/shoes/components/category2" */))
const _cabedbc8 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\category3.vue' /* webpackChunkName: "pages/shop/shoes/components/category3" */))
const _c933021a = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionbanner.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionbanner" */))
const _1ad39628 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectionslider.vue' /* webpackChunkName: "pages/shop/shoes/components/collectionslider" */))
const _3c237a44 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\collectiontab.vue' /* webpackChunkName: "pages/shop/shoes/components/collectiontab" */))
const _72ba1059 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\instagram.vue' /* webpackChunkName: "pages/shop/shoes/components/instagram" */))
const _7ce6bcd7 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\productSlider.vue' /* webpackChunkName: "pages/shop/shoes/components/productSlider" */))
const _a5cbe4c8 = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\service.vue' /* webpackChunkName: "pages/shop/shoes/components/service" */))
const _2fdf736c = () => interopDefault(import('..\\pages\\shop\\shoes\\components\\slider.vue' /* webpackChunkName: "pages/shop/shoes/components/slider" */))
const _48693de1 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\about.vue' /* webpackChunkName: "pages/shop/tools/components/about" */))
const _a7db5e4c = () => interopDefault(import('..\\pages\\shop\\tools\\components\\category.vue' /* webpackChunkName: "pages/shop/tools/components/category" */))
const _182f1349 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/tools/components/logo_slider" */))
const _1dfca3db = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-slider" */))
const _34def013 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\product-tab-slider.vue' /* webpackChunkName: "pages/shop/tools/components/product-tab-slider" */))
const _67211b69 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\select-vehical.vue' /* webpackChunkName: "pages/shop/tools/components/select-vehical" */))
const _602d6e09 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\service.vue' /* webpackChunkName: "pages/shop/tools/components/service" */))
const _97eeb786 = () => interopDefault(import('..\\pages\\shop\\tools\\components\\slider.vue' /* webpackChunkName: "pages/shop/tools/components/slider" */))
const _88d7304e = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\banner.vue' /* webpackChunkName: "pages/shop/vegetables/components/banner" */))
const _bd4c22e2 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\blog.vue' /* webpackChunkName: "pages/shop/vegetables/components/blog" */))
const _d7f5f144 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/product_slider" */))
const _55595ecb = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\services.vue' /* webpackChunkName: "pages/shop/vegetables/components/services" */))
const _3b017f0e = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\slider.vue' /* webpackChunkName: "pages/shop/vegetables/components/slider" */))
const _6a576597 = () => interopDefault(import('..\\pages\\shop\\vegetables\\components\\special_products.vue' /* webpackChunkName: "pages/shop/vegetables/components/special_products" */))
const _29c91f72 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\blog.vue' /* webpackChunkName: "pages/shop/watch/components/blog" */))
const _7bd47a64 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\category.vue' /* webpackChunkName: "pages/shop/watch/components/category" */))
const _59dafc4c = () => interopDefault(import('..\\pages\\shop\\watch\\components\\categorytabs.vue' /* webpackChunkName: "pages/shop/watch/components/categorytabs" */))
const _731bfd49 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\collectionbanners.vue' /* webpackChunkName: "pages/shop/watch/components/collectionbanners" */))
const _58e1d612 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\instagram.vue' /* webpackChunkName: "pages/shop/watch/components/instagram" */))
const _59ce2656 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\logo_slider.vue' /* webpackChunkName: "pages/shop/watch/components/logo_slider" */))
const _f3fa8efe = () => interopDefault(import('..\\pages\\shop\\watch\\components\\product_slider.vue' /* webpackChunkName: "pages/shop/watch/components/product_slider" */))
const _81a133a4 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\services.vue' /* webpackChunkName: "pages/shop/watch/components/services" */))
const _64680331 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\slider.vue' /* webpackChunkName: "pages/shop/watch/components/slider" */))
const _17256336 = () => interopDefault(import('..\\pages\\shop\\watch\\components\\timer_banner.vue' /* webpackChunkName: "pages/shop/watch/components/timer_banner" */))
const _0dd992de = () => interopDefault(import('..\\pages\\shop\\watch\\components\\top_products.vue' /* webpackChunkName: "pages/shop/watch/components/top_products" */))
const _367259b2 = () => interopDefault(import('..\\pages\\collection\\leftsidebar\\_id.vue' /* webpackChunkName: "pages/collection/leftsidebar/_id" */))
const _4c70ce6e = () => interopDefault(import('..\\pages\\product\\sidebar\\_id.vue' /* webpackChunkName: "pages/product/sidebar/_id" */))
const _2da85f9a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6c8f5a4a,
    name: "blog-blog-detail"
  }, {
    path: "/blog/blog-leftsidebar",
    component: _ad7c174a,
    name: "blog-blog-leftsidebar"
  }, {
    path: "/blog/blog-nosidebar",
    component: _2ad42c3e,
    name: "blog-blog-nosidebar"
  }, {
    path: "/blog/blog-rightsidebar",
    component: _407f3f4a,
    name: "blog-blog-rightsidebar"
  }, {
    path: "/collection/full-width",
    component: _1f650715,
    name: "collection-full-width"
  }, {
    path: "/collection/list-view",
    component: _ca924e12,
    name: "collection-list-view"
  }, {
    path: "/collection/metro",
    component: _19f5fa9c,
    name: "collection-metro"
  }, {
    path: "/collection/no-sidebar",
    component: _48875d46,
    name: "collection-no-sidebar"
  }, {
    path: "/collection/right-sidebar",
    component: _079f23a4,
    name: "collection-right-sidebar"
  }, {
    path: "/collection/sidebar-popup",
    component: _d1e0e704,
    name: "collection-sidebar-popup"
  }, {
    path: "/collection/six-grid",
    component: _2b2fc41e,
    name: "collection-six-grid"
  }, {
    path: "/collection/three-grid",
    component: _0ee795a2,
    name: "collection-three-grid"
  }, {
    path: "/page/404",
    component: _0914d3ea,
    name: "page-404"
  }, {
    path: "/page/about",
    component: _1b2d5d3f,
    name: "page-about"
  }, {
    path: "/page/collection",
    component: _9a218648,
    name: "page-collection"
  }, {
    path: "/page/coming-soon",
    component: _f6fd040e,
    name: "page-coming-soon"
  }, {
    path: "/page/faq",
    component: _95f51270,
    name: "page-faq"
  }, {
    path: "/page/lookbook",
    component: _5c9a5674,
    name: "page-lookbook"
  }, {
    path: "/page/order-success",
    component: _edcdae94,
    name: "page-order-success"
  }, {
    path: "/page/review",
    component: _f25648d4,
    name: "page-review"
  }, {
    path: "/page/search",
    component: _64febc34,
    name: "page-search"
  }, {
    path: "/page/typography",
    component: _2b1052ed,
    name: "page-typography"
  }, {
    path: "/product/bundle-product",
    component: _57f657b4,
    name: "product-bundle-product"
  }, {
    path: "/product/four-image",
    component: _62fac304,
    name: "product-four-image"
  }, {
    path: "/shop/bags",
    component: _4c327d32,
    name: "shop-bags"
  }, {
    path: "/shop/beauty",
    component: _7f22b4c1,
    name: "shop-beauty"
  }, {
    path: "/shop/electronics-1",
    component: _23b5277c,
    name: "shop-electronics-1"
  }, {
    path: "/shop/fashion",
    component: _76237cbf,
    name: "shop-fashion"
  }, {
    path: "/shop/fashion-2",
    component: _7957ccba,
    name: "shop-fashion-2"
  }, {
    path: "/shop/fashion-3",
    component: _fded1bce,
    name: "shop-fashion-3"
  }, {
    path: "/shop/flower",
    component: _6af9b982,
    name: "shop-flower"
  }, {
    path: "/shop/furniture",
    component: _6a1f0b05,
    name: "shop-furniture"
  }, {
    path: "/shop/gym",
    component: _dbde7148,
    name: "shop-gym"
  }, {
    path: "/shop/jewellery",
    component: _fe8103d8,
    name: "shop-jewellery"
  }, {
    path: "/shop/kids",
    component: _8f631a20,
    name: "shop-kids"
  }, {
    path: "/shop/pets",
    component: _4b5e706e,
    name: "shop-pets"
  }, {
    path: "/shop/shoes",
    component: _623d8e62,
    name: "shop-shoes"
  }, {
    path: "/shop/tools",
    component: _a9efa808,
    name: "shop-tools"
  }, {
    path: "/shop/vegetables",
    component: _4e0f118b,
    name: "shop-vegetables"
  }, {
    path: "/shop/watch",
    component: _17d59088,
    name: "shop-watch"
  }, {
    path: "/blog/widgets/blog-list",
    component: _685928ab,
    name: "blog-widgets-blog-list"
  }, {
    path: "/blog/widgets/blog-sidebar",
    component: _063d1b5f,
    name: "blog-widgets-blog-sidebar"
  }, {
    path: "/page/account/cart",
    component: _11610a82,
    name: "page-account-cart"
  }, {
    path: "/page/account/checkout",
    component: _ca722336,
    name: "page-account-checkout"
  }, {
    path: "/page/account/contact",
    component: _3e5bf851,
    name: "page-account-contact"
  }, {
    path: "/page/account/dashboard",
    component: _07b96285,
    name: "page-account-dashboard"
  }, {
    path: "/page/account/forget-password",
    component: _5a6fbc2c,
    name: "page-account-forget-password"
  }, {
    path: "/page/account/login",
    component: _fbd8ed4c,
    name: "page-account-login"
  }, {
    path: "/page/account/login-firebase",
    component: _6e60114a,
    name: "page-account-login-firebase"
  }, {
    path: "/page/account/profile",
    component: _4683715a,
    name: "page-account-profile"
  }, {
    path: "/page/account/register",
    component: _44644d7c,
    name: "page-account-register"
  }, {
    path: "/page/account/wishlist",
    component: _31f8ff64,
    name: "page-account-wishlist"
  }, {
    path: "/page/compare/compare-1",
    component: _539d8dfc,
    name: "page-compare-compare-1"
  }, {
    path: "/page/compare/compare-2",
    component: _53815efa,
    name: "page-compare-compare-2"
  }, {
    path: "/page/element/banner",
    component: _4dee495a,
    name: "page-element-banner"
  }, {
    path: "/page/element/category",
    component: _88b17ea8,
    name: "page-element-category"
  }, {
    path: "/page/element/collection-banner",
    component: _802dfa06,
    name: "page-element-collection-banner"
  }, {
    path: "/page/element/home-slider",
    component: _2b2858d1,
    name: "page-element-home-slider"
  }, {
    path: "/page/element/logo-slider",
    component: _48745085,
    name: "page-element-logo-slider"
  }, {
    path: "/page/element/multi-slider",
    component: _1687a123,
    name: "page-element-multi-slider"
  }, {
    path: "/page/element/product-slider",
    component: _f68223a6,
    name: "page-element-product-slider"
  }, {
    path: "/page/element/product-tabs",
    component: _7a014f4a,
    name: "page-element-product-tabs"
  }, {
    path: "/page/element/service",
    component: _71323bf7,
    name: "page-element-service"
  }, {
    path: "/page/portfolio/masonary-fullwidth",
    component: _ea9b74a4,
    name: "page-portfolio-masonary-fullwidth"
  }, {
    path: "/page/portfolio/mesonary-grid-2",
    component: _6ebd5360,
    name: "page-portfolio-mesonary-grid-2"
  }, {
    path: "/page/portfolio/mesonary-grid-3",
    component: _6ecb6ae1,
    name: "page-portfolio-mesonary-grid-3"
  }, {
    path: "/page/portfolio/mesonary-grid-4",
    component: _6ed98262,
    name: "page-portfolio-mesonary-grid-4"
  }, {
    path: "/page/portfolio/portfolio-2-col",
    component: _15d9c3d4,
    name: "page-portfolio-portfolio-2-col"
  }, {
    path: "/page/portfolio/portfolio-3-col",
    component: _ed50e5d2,
    name: "page-portfolio-portfolio-3-col"
  }, {
    path: "/page/portfolio/portfolio-4-col",
    component: _1d9bfc18,
    name: "page-portfolio-portfolio-4-col"
  }, {
    path: "/product/sidebar/no-sidebar",
    component: _b891b168,
    name: "product-sidebar-no-sidebar"
  }, {
    path: "/product/sidebar/right-sidebar",
    component: _4993c442,
    name: "product-sidebar-right-sidebar"
  }, {
    path: "/product/three-column/thumbnail-bottom",
    component: _6dedb93e,
    name: "product-three-column-thumbnail-bottom"
  }, {
    path: "/product/three-column/thumbnail-left",
    component: _d5f36a86,
    name: "product-three-column-thumbnail-left"
  }, {
    path: "/product/three-column/thumbnail-right",
    component: _490826d6,
    name: "product-three-column-thumbnail-right"
  }, {
    path: "/product/thumbnail-image/image-outside",
    component: _4e1eac6e,
    name: "product-thumbnail-image-image-outside"
  }, {
    path: "/product/thumbnail-image/left-image",
    component: _0dcca922,
    name: "product-thumbnail-image-left-image"
  }, {
    path: "/product/thumbnail-image/right-image",
    component: _80f67e00,
    name: "product-thumbnail-image-right-image"
  }, {
    path: "/page/account/auth/auth",
    component: _41be4e80,
    name: "page-account-auth-auth"
  }, {
    path: "/shop/bags/components/banner",
    component: _19456392,
    name: "shop-bags-components-banner"
  }, {
    path: "/shop/bags/components/blog",
    component: _774ef6f0,
    name: "shop-bags-components-blog"
  }, {
    path: "/shop/bags/components/category",
    component: _0da0ace4,
    name: "shop-bags-components-category"
  }, {
    path: "/shop/bags/components/category2",
    component: _b2e6ce04,
    name: "shop-bags-components-category2"
  }, {
    path: "/shop/bags/components/categorytab",
    component: _2ef2f1e1,
    name: "shop-bags-components-categorytab"
  }, {
    path: "/shop/bags/components/instagram",
    component: _7eb42ebc,
    name: "shop-bags-components-instagram"
  }, {
    path: "/shop/bags/components/productcategoryslider",
    component: _369bfc18,
    name: "shop-bags-components-productcategoryslider"
  }, {
    path: "/shop/bags/components/productslider",
    component: _3143159a,
    name: "shop-bags-components-productslider"
  }, {
    path: "/shop/bags/components/services",
    component: _0aba5044,
    name: "shop-bags-components-services"
  }, {
    path: "/shop/bags/components/slider",
    component: _ce9b0a72,
    name: "shop-bags-components-slider"
  }, {
    path: "/shop/beauty/components/about",
    component: _286871b4,
    name: "shop-beauty-components-about"
  }, {
    path: "/shop/beauty/components/blog",
    component: _5ba964ce,
    name: "shop-beauty-components-blog"
  }, {
    path: "/shop/beauty/components/instagram",
    component: _5f39684b,
    name: "shop-beauty-components-instagram"
  }, {
    path: "/shop/beauty/components/product-slider",
    component: _4e2fb836,
    name: "shop-beauty-components-product-slider"
  }, {
    path: "/shop/beauty/components/slider",
    component: _7cf74398,
    name: "shop-beauty-components-slider"
  }, {
    path: "/shop/beauty/components/top-product-slider",
    component: _1cf867a4,
    name: "shop-beauty-components-top-product-slider"
  }, {
    path: "/shop/beauty/components/video-tutorial",
    component: _5b0dd0a7,
    name: "shop-beauty-components-video-tutorial"
  }, {
    path: "/shop/electronics-1/components/collection_banner",
    component: _511fabc1,
    name: "shop-electronics-1-components-collection_banner"
  }, {
    path: "/shop/electronics-1/components/product_tab",
    component: _a30fadce,
    name: "shop-electronics-1-components-product_tab"
  }, {
    path: "/shop/electronics-1/components/slider",
    component: _167058bd,
    name: "shop-electronics-1-components-slider"
  }, {
    path: "/shop/fashion-2/components/banner",
    component: _c168ddec,
    name: "shop-fashion-2-components-banner"
  }, {
    path: "/shop/fashion-2/components/collection",
    component: _a08ab708,
    name: "shop-fashion-2-components-collection"
  }, {
    path: "/shop/fashion-2/components/collection-banner",
    component: _716b0d4d,
    name: "shop-fashion-2-components-collection-banner"
  }, {
    path: "/shop/fashion-2/components/instagram",
    component: _07996e44,
    name: "shop-fashion-2-components-instagram"
  }, {
    path: "/shop/fashion-2/components/product",
    component: _65864381,
    name: "shop-fashion-2-components-product"
  }, {
    path: "/shop/fashion-2/components/slider",
    component: _1eb8a83f,
    name: "shop-fashion-2-components-slider"
  }, {
    path: "/shop/fashion-3/components/banner",
    component: _237bde0b,
    name: "shop-fashion-3-components-banner"
  }, {
    path: "/shop/fashion-3/components/product_slider",
    component: _b517a8e0,
    name: "shop-fashion-3-components-product_slider"
  }, {
    path: "/shop/fashion-3/components/product_tab",
    component: _408be676,
    name: "shop-fashion-3-components-product_tab"
  }, {
    path: "/shop/fashion-3/components/slider",
    component: _ba2e1580,
    name: "shop-fashion-3-components-slider"
  }, {
    path: "/shop/fashion/components/banner",
    component: _2f5a5db6,
    name: "shop-fashion-components-banner"
  }, {
    path: "/shop/fashion/components/blog",
    component: _34fa3adb,
    name: "shop-fashion-components-blog"
  }, {
    path: "/shop/fashion/components/collection_banner",
    component: _5bc32804,
    name: "shop-fashion-components-collection_banner"
  }, {
    path: "/shop/fashion/components/instagram",
    component: _6a567449,
    name: "shop-fashion-components-instagram"
  }, {
    path: "/shop/fashion/components/logo_slider",
    component: _59ded94c,
    name: "shop-fashion-components-logo_slider"
  }, {
    path: "/shop/fashion/components/product_slider",
    component: _389b64aa,
    name: "shop-fashion-components-product_slider"
  }, {
    path: "/shop/fashion/components/product_tab",
    component: _311a58c8,
    name: "shop-fashion-components-product_tab"
  }, {
    path: "/shop/fashion/components/services",
    component: _4c22a517,
    name: "shop-fashion-components-services"
  }, {
    path: "/shop/fashion/components/slider",
    component: _67bfe85a,
    name: "shop-fashion-components-slider"
  }, {
    path: "/shop/flower/components/blog",
    component: _7d777638,
    name: "shop-flower-components-blog"
  }, {
    path: "/shop/flower/components/category_tab",
    component: _2eba7c6a,
    name: "shop-flower-components-category_tab"
  }, {
    path: "/shop/flower/components/collection_banner",
    component: _9d1fe872,
    name: "shop-flower-components-collection_banner"
  }, {
    path: "/shop/flower/components/instagram",
    component: _3498cb0c,
    name: "shop-flower-components-instagram"
  }, {
    path: "/shop/flower/components/product_slider",
    component: _d5c06072,
    name: "shop-flower-components-product_slider"
  }, {
    path: "/shop/flower/components/services",
    component: _52a8e9f4,
    name: "shop-flower-components-services"
  }, {
    path: "/shop/flower/components/slider",
    component: _f4487f12,
    name: "shop-flower-components-slider"
  }, {
    path: "/shop/flower/components/top_products",
    component: _7dbfc3a4,
    name: "shop-flower-components-top_products"
  }, {
    path: "/shop/furniture/components/blog",
    component: _2a6d24d5,
    name: "shop-furniture-components-blog"
  }, {
    path: "/shop/furniture/components/category_tab",
    component: _efcb83f2,
    name: "shop-furniture-components-category_tab"
  }, {
    path: "/shop/furniture/components/collection_banner",
    component: _82ac776c,
    name: "shop-furniture-components-collection_banner"
  }, {
    path: "/shop/furniture/components/parallax_banner",
    component: _8a44a61e,
    name: "shop-furniture-components-parallax_banner"
  }, {
    path: "/shop/furniture/components/slider",
    component: _67bf8858,
    name: "shop-furniture-components-slider"
  }, {
    path: "/shop/gym/components/blog",
    component: _64ad1c1e,
    name: "shop-gym-components-blog"
  }, {
    path: "/shop/gym/components/collection-banner",
    component: _98327c22,
    name: "shop-gym-components-collection-banner"
  }, {
    path: "/shop/gym/components/instagram",
    component: _c2c63634,
    name: "shop-gym-components-instagram"
  }, {
    path: "/shop/gym/components/logo-slider",
    component: _fcbea612,
    name: "shop-gym-components-logo-slider"
  }, {
    path: "/shop/gym/components/product-list",
    component: _28cd2390,
    name: "shop-gym-components-product-list"
  }, {
    path: "/shop/gym/components/slider",
    component: _763f84dd,
    name: "shop-gym-components-slider"
  }, {
    path: "/shop/gym/components/top-collection",
    component: _3aafe792,
    name: "shop-gym-components-top-collection"
  }, {
    path: "/shop/jewellery/components/category",
    component: _9f8ce87c,
    name: "shop-jewellery-components-category"
  }, {
    path: "/shop/jewellery/components/instagram",
    component: _2f372b9e,
    name: "shop-jewellery-components-instagram"
  }, {
    path: "/shop/jewellery/components/parallax-banner",
    component: _b4da1de4,
    name: "shop-jewellery-components-parallax-banner"
  }, {
    path: "/shop/jewellery/components/product-slider",
    component: _42f610c3,
    name: "shop-jewellery-components-product-slider"
  }, {
    path: "/shop/jewellery/components/product-tab",
    component: _a5ef73ba,
    name: "shop-jewellery-components-product-tab"
  }, {
    path: "/shop/jewellery/components/services",
    component: _a559a1bc,
    name: "shop-jewellery-components-services"
  }, {
    path: "/shop/jewellery/components/slider",
    component: _57117925,
    name: "shop-jewellery-components-slider"
  }, {
    path: "/shop/kids/components/collection_banner",
    component: _11aa4996,
    name: "shop-kids-components-collection_banner"
  }, {
    path: "/shop/kids/components/collection_slider",
    component: _7697f26a,
    name: "shop-kids-components-collection_slider"
  }, {
    path: "/shop/kids/components/instagram",
    component: _774e2f0c,
    name: "shop-kids-components-instagram"
  }, {
    path: "/shop/kids/components/logo_slider",
    component: _3d15053d,
    name: "shop-kids-components-logo_slider"
  }, {
    path: "/shop/kids/components/parallax_banner",
    component: _8804fac8,
    name: "shop-kids-components-parallax_banner"
  }, {
    path: "/shop/kids/components/product_slider",
    component: _159ee719,
    name: "shop-kids-components-product_slider"
  }, {
    path: "/shop/kids/components/slider",
    component: _55ef6c6e,
    name: "shop-kids-components-slider"
  }, {
    path: "/shop/pets/components/blog",
    component: _89def4de,
    name: "shop-pets-components-blog"
  }, {
    path: "/shop/pets/components/collection-banner",
    component: _f690e948,
    name: "shop-pets-components-collection-banner"
  }, {
    path: "/shop/pets/components/logo-slider",
    component: _692767b8,
    name: "shop-pets-components-logo-slider"
  }, {
    path: "/shop/pets/components/parallax-banner",
    component: _b3ae55fa,
    name: "shop-pets-components-parallax-banner"
  }, {
    path: "/shop/pets/components/product-slider",
    component: _7cc95a2e,
    name: "shop-pets-components-product-slider"
  }, {
    path: "/shop/pets/components/slider",
    component: _7d2344e0,
    name: "shop-pets-components-slider"
  }, {
    path: "/shop/pets/components/top-collection",
    component: _3d3f4576,
    name: "shop-pets-components-top-collection"
  }, {
    path: "/shop/shoes/components/about",
    component: _290ea634,
    name: "shop-shoes-components-about"
  }, {
    path: "/shop/shoes/components/blog",
    component: _36ad566a,
    name: "shop-shoes-components-blog"
  }, {
    path: "/shop/shoes/components/brand",
    component: _49fb412e,
    name: "shop-shoes-components-brand"
  }, {
    path: "/shop/shoes/components/category",
    component: _068cb8b2,
    name: "shop-shoes-components-category"
  }, {
    path: "/shop/shoes/components/category2",
    component: _cadb0aca,
    name: "shop-shoes-components-category2"
  }, {
    path: "/shop/shoes/components/category3",
    component: _cabedbc8,
    name: "shop-shoes-components-category3"
  }, {
    path: "/shop/shoes/components/collectionbanner",
    component: _c933021a,
    name: "shop-shoes-components-collectionbanner"
  }, {
    path: "/shop/shoes/components/collectionslider",
    component: _1ad39628,
    name: "shop-shoes-components-collectionslider"
  }, {
    path: "/shop/shoes/components/collectiontab",
    component: _3c237a44,
    name: "shop-shoes-components-collectiontab"
  }, {
    path: "/shop/shoes/components/instagram",
    component: _72ba1059,
    name: "shop-shoes-components-instagram"
  }, {
    path: "/shop/shoes/components/productSlider",
    component: _7ce6bcd7,
    name: "shop-shoes-components-productSlider"
  }, {
    path: "/shop/shoes/components/service",
    component: _a5cbe4c8,
    name: "shop-shoes-components-service"
  }, {
    path: "/shop/shoes/components/slider",
    component: _2fdf736c,
    name: "shop-shoes-components-slider"
  }, {
    path: "/shop/tools/components/about",
    component: _48693de1,
    name: "shop-tools-components-about"
  }, {
    path: "/shop/tools/components/category",
    component: _a7db5e4c,
    name: "shop-tools-components-category"
  }, {
    path: "/shop/tools/components/logo_slider",
    component: _182f1349,
    name: "shop-tools-components-logo_slider"
  }, {
    path: "/shop/tools/components/product-slider",
    component: _1dfca3db,
    name: "shop-tools-components-product-slider"
  }, {
    path: "/shop/tools/components/product-tab-slider",
    component: _34def013,
    name: "shop-tools-components-product-tab-slider"
  }, {
    path: "/shop/tools/components/select-vehical",
    component: _67211b69,
    name: "shop-tools-components-select-vehical"
  }, {
    path: "/shop/tools/components/service",
    component: _602d6e09,
    name: "shop-tools-components-service"
  }, {
    path: "/shop/tools/components/slider",
    component: _97eeb786,
    name: "shop-tools-components-slider"
  }, {
    path: "/shop/vegetables/components/banner",
    component: _88d7304e,
    name: "shop-vegetables-components-banner"
  }, {
    path: "/shop/vegetables/components/blog",
    component: _bd4c22e2,
    name: "shop-vegetables-components-blog"
  }, {
    path: "/shop/vegetables/components/product_slider",
    component: _d7f5f144,
    name: "shop-vegetables-components-product_slider"
  }, {
    path: "/shop/vegetables/components/services",
    component: _55595ecb,
    name: "shop-vegetables-components-services"
  }, {
    path: "/shop/vegetables/components/slider",
    component: _3b017f0e,
    name: "shop-vegetables-components-slider"
  }, {
    path: "/shop/vegetables/components/special_products",
    component: _6a576597,
    name: "shop-vegetables-components-special_products"
  }, {
    path: "/shop/watch/components/blog",
    component: _29c91f72,
    name: "shop-watch-components-blog"
  }, {
    path: "/shop/watch/components/category",
    component: _7bd47a64,
    name: "shop-watch-components-category"
  }, {
    path: "/shop/watch/components/categorytabs",
    component: _59dafc4c,
    name: "shop-watch-components-categorytabs"
  }, {
    path: "/shop/watch/components/collectionbanners",
    component: _731bfd49,
    name: "shop-watch-components-collectionbanners"
  }, {
    path: "/shop/watch/components/instagram",
    component: _58e1d612,
    name: "shop-watch-components-instagram"
  }, {
    path: "/shop/watch/components/logo_slider",
    component: _59ce2656,
    name: "shop-watch-components-logo_slider"
  }, {
    path: "/shop/watch/components/product_slider",
    component: _f3fa8efe,
    name: "shop-watch-components-product_slider"
  }, {
    path: "/shop/watch/components/services",
    component: _81a133a4,
    name: "shop-watch-components-services"
  }, {
    path: "/shop/watch/components/slider",
    component: _64680331,
    name: "shop-watch-components-slider"
  }, {
    path: "/shop/watch/components/timer_banner",
    component: _17256336,
    name: "shop-watch-components-timer_banner"
  }, {
    path: "/shop/watch/components/top_products",
    component: _0dd992de,
    name: "shop-watch-components-top_products"
  }, {
    path: "/collection/leftsidebar/:id?",
    component: _367259b2,
    name: "collection-leftsidebar-id"
  }, {
    path: "/product/sidebar/:id?",
    component: _4c70ce6e,
    name: "product-sidebar-id"
  }, {
    path: "/",
    component: _2da85f9a,
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
