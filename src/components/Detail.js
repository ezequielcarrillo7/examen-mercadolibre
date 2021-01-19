import React, {Fragment} from 'react'
import './Detail.css'

const Detail = () => {
    return (
        <Fragment>
            <div className="div-container-detail">
                <div className="div-foto"><img className='img-foto' src="https://http2.mlstatic.com/D_NQ_NP_617012-MLU44360484172_122020-O.webp" alt="foto"/></div>
                <div className="div-title">
                    <div className="div-info">
                        <p className='p-condicion'>Nuevo - 234 vendidos</p>
                        <h1 className="h1-title">iPhone 7 Nuevo</h1>
                        <h2 className="h2-price">$ 1920</h2>
                    </div>  
                    <button className="btn-comprar">Comprar</button>
                </div>
            </div>
            <div className="div-description">
                <div className="div-description-title"><h1 className='h1-description'>Descripción del producto</h1></div>
                <div className="div-description-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora soluta, officiis obcaecati maiores maxime dolorum rem adipisci optio vero quaerat cum modi facere minus perferendis molestias tenetur aperiam nostrum expedita velit fuga sed accusantium, explicabo incidunt. Ab odio explicabo iure accusantium facilis nisi iste. Adipisci rerum esse excepturi asperiores!</p></div> 
            </div>
        </Fragment>
            
     );
}
 
export default Detail;