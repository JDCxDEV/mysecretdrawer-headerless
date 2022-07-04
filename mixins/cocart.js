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
                    "src": item.src.full,
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
        formatProduct(item) {
            let product = {
                id: item.id,
                title: item.name,
                description: item.description,
                type: item.type,
                brand: item.type,
                collection: this.formatCategories(item.categories),
                category: item.categories[0].name,
                price: item.prices.on_sale ? item.prices.sale_price : item.prices.regular_price,
                sale: item.prices.sale_price,
                discount: "40",
                stock: item.stock.stock_quantity ? item.stock.stock_quantity : 0,
                new: true,
                tags: item.tags,
                variants: item.variations,
                images : this.formatImages(item.images, item.id),
            };
            return product;
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
            
                this.getDetail = this.formatProduct(response.data);
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
