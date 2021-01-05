import React from 'react'
import styled from '@emotion/styled'
import './Header.css'

import HeaderLogo from '../assets/Logo_ML.png'
import Lupa from '../assets/ic_Search.png'

const ContenedorHeader = styled.header`
    width:100%;
    background-color: #fff159;
    padding: .8rem;
    display: flex;
    justify-content: center;
    flex-direction: row;

`;

const ContenedorBusqueda = styled.form`
    justify-content: space-between;
    width:60%;

`;

const ContenedorLogo = styled.div`
    display:flex;
    padding-right: 2rem;
`;

const InputSearch = styled.input`
    background-color:#fff;
    color: #333333;
    height: 2.5rem;
    padding-left: 1rem; 
    text-align: left;
    display:block;
    font-size: 18px;
    border: none;
    width: 100%;
    
    :focus{
        outline: none;
    }

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #d5d5d5;
        opacity: 1; /* Firefox (Ya que este navegador suele bajar la opacidad de los placeholders)*/
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #d5d5d5;
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #d5d5d5;
}
`
const BotonBusqueda = styled.button`
    padding:0 1rem 0 1rem;
    border:none;

    :focus{
        outline: none;
    }
    
    :active{
        background-color: #d5d5d5;
    }

    :hover{
        cursor:pointer;
    }

`

const Header = () => {
    return ( 
        <ContenedorHeader>
            <ContenedorLogo>
                    <a href="/"><img src={HeaderLogo} alt="Mercado Libre" /></a>
            </ContenedorLogo>
            <ContenedorBusqueda>
                    <InputSearch type="text" placeholder="Nunca dejes de buscar"/>                
            </ContenedorBusqueda>
            <BotonBusqueda><img src={Lupa} alt="Click para buscar"/></BotonBusqueda>
        </ContenedorHeader>
        
     );
}
 
export default Header;