import React, {Fragment, useEffect, useState} from 'react'
import './Detail.css'
import Error from './Error'
import Spinner from './Spinner'

const Detail = (props) => {



    const [item, setItem] = useState({})
    const [price, setPrice] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const id = props.match.params.id

    useEffect(() => {
        fetch(`http://localhost:5000/api/items/${id}`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    setLoading(false)
                    console.error(response)
                    setError(true)
                    }
                   
                 else {
                    setLoading(false)
                    setItem(response.item)
                    setPrice(response.item.price)
                    
                    if(!response.item.id){
                        setError(true)
                    }
                }
            })    
    }, [id]);


   

    return (
        loading ? <Spinner></Spinner> :
        error ? <Error></Error> :
        <Fragment>
            <div className="div-container-detail">
                <div className="div-foto"><img className='img-foto' src={item.picture} alt="foto"/></div>
                <div className="div-title">
                    <div className="div-info">
                        <p className='p-condicion'>{item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos</p>
                        <h1 className="h1-title">{item.title}</h1>
                        <h2 className="h2-price">{price.currency === 'ARS' ? '$ ' : 'U$S '} {price.amount}{price.decimals === 0 ? '.0' : parseFloat(price.decimals).toFixed(2)}</h2>
                    </div>
                    <div className="div-btn">
                        <button className="btn-comprar">Comprar</button>
                    </div>      
                </div>
            </div>
            <div className="div-description">
                <div className="div-description-title"><h1 className='h1-description'>Descripción del producto</h1></div>
                <div className="div-description-text"><p>{item.description ? item.description : 'El vendedor no agregó una descripción.'}</p></div> 
            </div>
        </Fragment>
        
            
     );
}
 
export default Detail;