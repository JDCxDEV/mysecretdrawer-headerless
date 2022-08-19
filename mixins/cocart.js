// define a mixin object
import CoCartAPI from "@cocart/cocart-rest-api";
import formatHelper from './resuable/format'


const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v2'
});

const helper = new formatHelper;

export default {
    methods: {
        fetchCategories() {        
            CoCart.get("products/categories",{
                exclude: 17
            }).then((response) => {
                this.category = helper.formatCategories(response.data);
            }).catch((error) => {
                console.log(error);
            })
        },

        fetchProducts() {        
            CoCart.get("products")
            .then((response) => {
                let data = response.data;
                if(data.total_products) {
                    data.products.forEach((item) => {
                        this.products.push(helper.formatProduct(item));
                    });   
                }
            }).catch((error) => {
                console.log(error);
            })
        },

        async fetchSingleProduct(id){
            CoCart.get("products/" + id)
            .then((response) => {
                this.getDetail = helper.formatProduct(response.data, true);
                this.$store.dispatch('products/fetchRelatedProducts', this.getDetail.related);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
};
