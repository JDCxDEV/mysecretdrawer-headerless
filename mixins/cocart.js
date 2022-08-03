// define a mixin object
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
    version: 'cocart/v2'
});

export default {
    methods: {
        fetchCategories() {        
            CoCart.get("products/categories",{
                exclude: 17
            })
            .then((response) => {
                this.category = this.formatCategories(response.data);
            })
            .catch((error) => {
        
            })
            .finally(() => {
            // Always executed.
            });
        },

        formatCategories(items) {
            let categories = [];
            items.forEach((item) => {
                let category =  {
                    title: item.name.replace("&amp;", "&"),
                    imagepath : item.image ? item.image.src : require('@/assets/images/electronics/5.jpg'),
                    subtitle: item.description
                };
                categories.push(category);
            });
            return categories;
        },
        formatImages(items, product_id) {
            let images = [];
            items.forEach((item) => {
                let image =  {
                    "image_id": item.id,
                    "id": product_id,
                    "alt": item.alt,
                    "src": item.src,
                    "variant_id": [
                        201,
                        204,
                        207
                    ]
                };
                images.push(image);
            });

            return images;
        },
        formatProduct(item, shouldFetchRelatedData = false) {
            let product = {
                id: item.id,
                title: item.name,
                description: this.parseString(item.description),
                type: item.type,
                brand: item.type,
                average_rating: item.average_rating,
                collection: this.formatCategories(item.categories),
                category: item.categories[0].name,
                price: (item.prices.on_sale ? item.prices.sale_price : item.prices.regular_price) / 100,
                currency: item.currency,
                sale: item.prices.sale_price,
                discount: "40",
                stock: item.stock.stock_quantity ? item.stock.stock_quantity : 0,
                stock_quantity: item.stock.stock_quantity,
                is_in_stock: item.stock.is_in_stock,
                new: true,
                tags: item.tags,
                variants: item.variations,
                images : this.formatImages(item.images, item.id),
                short_description: item.short_description.replace(/(?:\r\n|\r|\n)/g, '<br>'),
                attributes: item.attributes,
            };

            if(item.related.length && shouldFetchRelatedData) {
                let ids = [];
                item.related.forEach((item) => {
                    ids.push(item.id);
                });
                this.$store.dispatch('products/fetchRelatedProducts', ids);
            }
            return product;
        },
        parseString(item) {
            let cleanString = item.replace(/(?:\r\n|\r|\n)/g, '<br>');
            cleanString = cleanString.replace(/(?:&nbsp;)/g, '')
            console.log(cleanString.replace(/(?:<br><br>)/g, '<br>'));
            return cleanString.replace(/(?:<br><br>)/g, '<br>')
        },
        fetchProducts() {        
            CoCart.get("products")
            .then((response) => {
                let data = response.data;
                if(data.total_products) {
                    data.products.forEach((item) => {
                        this.products.push(this.formatProduct(item));
                    });   
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            // Always executed.
            });
        },

        async fetchSingleProduct(id){
            CoCart.get("products/" + id)
            .then((response) => {

                this.getDetail = this.formatProduct(response.data, true);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            // Always executed.
            });
        }
    }
};
