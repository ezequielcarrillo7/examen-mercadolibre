import React from 'react'
import styled from '@emotion/styled'
import './Item.css'

import FreeShipping from '../assets/ic_shipping.png'

const ImgItem = styled.img`
    width:180px;
    height:180px;
    border-radius:4px;
    object-fit:cover;
`;


const Item = () => {
    return (
        <div className='div-container'>
            

            <div className="div-img">
                <ImgItem src='https://http2.mlstatic.com/D_NQ_NP_809085-MLU44275563893_122020-C.webp'></ImgItem>
            </div>
            <div className='div-info'>
                <div className="div-price">
                <p className='p-price'>$1000</p><span className="span-price"><img src={FreeShipping} alt='Envio Gratuito'></img></span>
                    
                </div>
                
                <div className='div-description'>
                    <p className="p-description">Camioneta 0km Renault.</p>
                </div>
            </div>

            <div className="div-location">
                <p className="p-location">Capital Federal</p>
            </div>
            

        </div>

        
        
     );
}
 
export default Item;