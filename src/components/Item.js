import React from 'react'
import styled from '@emotion/styled'
import './Item.css'
import {Link} from 'react-router-dom'

import FreeShipping from '../assets/ic_shipping.png'

const ImgItem = styled.img`
    width:180px;
    height:180px;
    border-radius:4px;
    object-fit:cover;
`;

const ContenedorItem = styled.div`
    background-color: #ffffff;
    width: 82rem;
    height: 210px;
    margin: 0 auto;
    margin-top: 1px;
`;

const Item = ({data}) => {
    
    return (
        
        <ContenedorItem>
           
            <div className='div-container'>
                
                <div className="div-img">
                    <Link to={{pathname: `/items/${data.id}`, data: data}}>
                        <ImgItem src={data.picture}></ImgItem>
                    </Link>
                </div>
                
                
                <div className='div-item-info'>
                    <div className="div-price">
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{pathname: `/items/${data.id}`, data: data}}>
                        <p className='p-price'>{data.price.currency === 'ARS' ? '$ ' : 'U$S '}{data.price.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span>{data.price.decimals ? data.price.decimals > 0 : null}</span></p><span className="span-shipping">{data.free_shipping ? <img src={FreeShipping} alt='Envio Gratuito'></img> : null}</span> 
                    </Link>    
                    </div>
                    
                    <div className='div-item-description'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{pathname: `/items/${data.id}`, data: data}}>
                            <p className="p-description">{data.title}</p>
                        </Link>
                    </div>
                </div>

                <div className="div-location">
                    <p className="p-location">{data.adress}</p>
                </div>
            </div>
           
        </ContenedorItem>
     

        
        
     );
}
 
export default Item;