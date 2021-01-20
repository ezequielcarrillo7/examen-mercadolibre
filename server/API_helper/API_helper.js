const request = require("request");

//La funcion make_API_call retorna una promesa que se resuelve (resolve) o deniega (reject) basado en el resultado desde la API.
//La opcion {json:true} en la funcion request convierte el resultado en un objeto JSON.

const make_call = url => {
    return new Promise((resolve, reject) => {
        request(url, { json: true }, (err, res, body) => {
            if (err){
                reject(err)
             }else{
                resolve(body)
            }
        });
    })
}

const search = query => {
    return this.make_call(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
}

const getItem = id => {
    return this.make_call(`https://api.mercadolibre.com/items/${id}`)
    .then((item) => {
        return this.make_call(`https://api.mercadolibre.com/items/${id}/description`)
        .then(description => {
            return {item: item, description: description};
        })
    })
}

exports.make_call = make_call;
exports.search = search;
exports.getItem = getItem;