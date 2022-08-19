export default class formatHelper {
    formatImages(items, product_id){
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
    }

    parseString(item) {
        let cleanString = item.replace(/(?:\r\n|\r|\n)/g, '<br>');
        cleanString = cleanString.replace(/(?:&nbsp;)/g, '');
        cleanString = cleanString.replace("&amp;", "&");
        

        return cleanString.replace(/(?:<br><br>)/g, '<br>')
    }

    formatCategories(items) {
        let categories = [];

        items.forEach((item) => {
            let category =  {
                title: item.name.replace("&amp;", "&"),
                imagepath : item.image ? process.env.VUE_APP_API_URL + item.image.src : require('@/assets/images/electronics/5.jpg'),
                subtitle: item.description
            };
            categories.push(category);
        });

        return categories;
    }
    formatProduct(item, shouldFetchRelatedData = false) {
        let product = {
            id: item.id,
            title: this.parseString(item.name),
            description: item.description,
            type: item.type,
            brand: item.type,
            average_rating: item.average_rating,
            collection: this.formatCategories(item.categories),
            category: item.categories[0].name,
            price: item.prices.price / 100,
            on_sale: item.prices.on_sale,
            regular_price: item.prices.regular_price / 100,
            currency: item.currency,
            sale_price: item.prices.sale_price,
            discount: "40",
            stock: item.stock.stock_quantity ? item.stock.stock_quantity : 0,
            stock_quantity: item.stock.stock_quantity,
            is_in_stock: item.stock.is_in_stock,
            new: false,
            tags: item.tags,
            variants: item.variations,
            images : this.formatImages(item.images, item.id),
            short_description: this.parseString(item.short_description),
            attributes: item.attributes,
        };

        if(item.related.length && shouldFetchRelatedData) {
            product.related = [];
            item.related.forEach((item) => {
                product.related.push(item.id);
            });
        }
        return product;
    }
}