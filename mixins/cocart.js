// define a mixin object
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
    url: process.env.VUE_APP_API_URL,
});

export default {

    methods: {
        fetchCategories() {        
            CoCart.get("products/categories")
            .then((response) => {

                response.data.forEach((item) => {
                    let category=  {
                    title: item.name,
                    imagepath : item.image ? item.image.src : require('@/assets/images/electronics/5.jpg'),
                    subtitle: item.description
                };
            
                this.items.push(category);
            });
                console.log("Response Data:", response.data);
            })
            .catch((error) => {
        
            })
            .finally(() => {
            // Always executed.
            });
      }
    }
  };
