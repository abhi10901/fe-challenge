
class ProductService {

    getProducts() {

        return new Promise((resolve, reject) => {
            fetch('./data/products.json')
                .then(res => res.json())
                .then(data => {
                    console.log("Data: ", data);
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
}

export default new ProductService();