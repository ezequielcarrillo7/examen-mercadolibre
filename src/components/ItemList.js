import React, {Fragment} from 'react'
import styled from '@emotion/styled'
import Item from './Item'
import Error from './Error'
import './ItemList.css'


const ContenedorLista = styled.div`
    margin: 0 auto;
    display:flex;
    flex-direction:column;  
`;

const ItemList = ({list, categories}) => {
    
    return (

            list.length === 0 ? <Error></Error>
            : <Fragment>
                <div className='div-breadcrumb'>{categories.map((category, index) => <p className='p-breadcrumb' key={index}>{category}</p>)}</div>
                <ContenedorLista>
                    {list.slice(0,4).map((item) => <Item data={item} key={item.id}/>)}
                </ContenedorLista>   
            </Fragment>
            
        );
}
 
export default ItemList;