import React from 'react'
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Test in <GifItem>', () => {

    const title = 'Saitama'
    const url = "https://one-punch.com/saitama.jpg"

    test('debe de hacer match con snapshot', () => {

        const { container } = render( <GifItem title= {title} url= {url} />)
        expect( container ).toMatchSnapshot()
        
    });

    test('Debe mostrar la imagen con el url y el ALT indicado', () => {

        render( <GifItem title= {title} url= {url} />)
        // screen.debug() --> Es un consolo log del codigo html
        expect( screen.getByRole('img').src).toBe( url )


    });
    
});