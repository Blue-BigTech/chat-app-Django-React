import React from 'react'

import {
    Preloader,
    Dots,
    Dot,
} from './Loader.styles'


export default function Loader() {
    return (
        <>
            <Preloader>
                <Dots>
                    <Dot dot='1'></Dot>
                    <Dot dot='2'></Dot>
                    <Dot dot='3'></Dot>
                    <Dot dot='4'></Dot>
                    <Dot dot='5'></Dot>
                </Dots>
            </Preloader>  
        </>
    )
}
