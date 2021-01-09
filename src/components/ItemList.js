import React from 'react'
import styled from '@emotion/styled'
import Item from './Item'


const ContenedorItem = styled.div`
    background-color: #ffffff;
    width: 82rem;
    height: 210px;
    margin: 0 auto;
    margin-top: 1px
`;

const ContenedorLista = styled.div`
    margin: 46px auto;
    display:flex;
    flex-direction:column;
    
`;


const ItemList = () => {
    return (
        <ContenedorLista>
            <ContenedorItem>
                <Item></Item>     
            </ContenedorItem>
            <ContenedorItem>
                <Item></Item>     
            </ContenedorItem>
            <ContenedorItem>
                <Item></Item>     
            </ContenedorItem>
            <ContenedorItem>
                <Item></Item>     
            </ContenedorItem>
            <ContenedorItem>
                <Item></Item>     
            </ContenedorItem>           
        </ContenedorLista>

        
     );
}
 
export default ItemList;