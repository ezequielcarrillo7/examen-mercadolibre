import React from 'react'
import styled from '@emotion/styled'
import Item from './Item'


const ContenedorLista = styled.div`
    margin: 46px auto;
    display:flex;
    flex-direction:column;  
`;


const ItemList = ({list}) => {

    return (
        <ContenedorLista>
            {list.slice(0,4).map((item) => <Item data={item} key={item.id}/>)}
        </ContenedorLista>
     );
}
 
export default ItemList;