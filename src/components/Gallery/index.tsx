import './styles.css'

import { CaretCircleRight, CaretCircleLeft } from 'phosphor-react';

import { movies } from './data';
import { useState } from 'react';
import { Button } from '../Button';
import ReactDOM from 'react-dom/client';

export function Gallery() {

    const [id, setId] = useState()
         let movie = movies[0]
         let count = 0

    function beforeClick(event){
        setId(event.target.value);
        count++
        movie = movies[count]
    }

    function nextClick(event){
        setId(event.target.value);
        count--
        movie = movies[count]
    }



    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                    <div className="Arrows"> 
                        <div className='galleryCaretLeft'>
                            <Button text="Anterior" type='default' onClick={beforeClick}/>
                        </div>
                        <div className='galleryCaretRight'>
                            <Button text="Próximo" type='default' onClick={nextClick}/>
                        </div>
                    </div>
            </section>
        </>
    );
}