import React from 'react'
import './Detail.css'

const Detail = () => {
    return ( 
        <div className="div-container-detail">
            <div className="div-foto"><img className='img-foto' src="https://http2.mlstatic.com/D_NQ_NP_617012-MLU44360484172_122020-O.webp" alt="foto"/></div>
            <div className="div-title">
                <button className="btn-comprar">Comprar</button>
            </div>
        </div>
     );
}
 
export default Detail;