const API_helper = require('../API_helper/API_helper')

exports.getListItem = query => {
    return API_helper.search(query)
        .then(response => {
            const author = {
                name: 'Ezequiel',
                lastname: 'Carrillo'
            }
            
            const categories = response.filters[0] && response.filters[0].values[0] ? response.filters[0].values[0].path_from_root.map(category => category.name) : []
            
            const items = response.results.map(item => {
                
                const amount = Math.trunc(item.price)
                const decimals = item.price - amount
                
                return {
                    id: item.id,
                    title: item.title,
                    price: {
                        currency: item.currency_id,
                        amount: amount,
                        decimals: decimals
                    },
                    picture: item.thumbnail,
                    condition: item.condition,
                    free_shipping: item.shipping.free_shipping,
                    adress: item.address.state_name
                }
            })
            
      
     
            return {author, categories, items}
        });
        
}

exports.getItemInfo = id => {
    return API_helper.getItem(id)
        .then(
            responses => {
                const author = {
                    name: 'Ezequiel',
                    lastname: 'Carrillo'
                }

                const amount = Math.trunc(responses.item.price)
                const decimals = responses.item.price - amount

                const item = {
                    id: responses.item.id,
                    title: responses.item.title,
                    price: {
                        currency: responses.item.currency_id,
                        amount: amount,
                        decimals: decimals
                    },
                    picture: responses.item.thumbnail,
                    condition: responses.item.condition,
                    free_shipping: responses.item.free_shipping,
                    sold_quantity: responses.item.sold_quantity,
                    description: responses.description.plain_text
                }

                return {author, item}
            }
        )
}


