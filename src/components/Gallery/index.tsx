import './styles.css'

import { CaretCircleRight, CaretCircleLeft } from 'phosphor-react';

import { movies } from './data';
import { useState } from 'react';
import { Button } from '../Button';
import ReactDOM from 'react-dom/client';

export function Gallery() {

    const [id, setId] = useState(0)
         let movie = movies[id]

    function beforeClick(){
        if(id == 0){
        }else{
            setId(id - 1)
        }
        
    }

    function nextClick(){
        if(id == 14){
        }else{
            setId(id + 1)
        }
    }


    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                    <div className="tittleMovie">
                        <p>{movie.title}</p>
                    </div>
                    <div className="description">
                        <h2>{movie.synopsis}</h2>
                    </div>
                    <div className="Arrows"> 
                        <div className='galleryCaretLeft'>
                            <Button text='Anterior' type="default" onClick={beforeClick}/>
                        </div>
                        <div className='galleryCaretRight'>
                        <Button text='Próximo' type="default" onClick={nextClick}/>
                        </div>
                    </div>
            </section>
        </>
    );
}