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

    function initialClick(){
        setId(0)
    }


    return (
        <>
            <section className="gallery">
                <img src={movie.images.poster} alt="" />
                    <div className="titleMovie">
                        <h1>{movie.title}</h1>
                        
                    </div>
                    <div className="descriptionMovie">
                        <h2>Lançamento: {movie.releaseDate}</h2>
                        <h2>Duração: {movie.duration}</h2>
                        <h2>Faixa Etária: {movie.parentalRating}</h2>
                    </div>
                    <div className="buttons"> 
                            <Button text='Anterior' type="default" onClick={beforeClick}/>
                            <Button text='Inicio' type="default" onClick={initialClick}/>
                            <Button text='Próximo' type="default" onClick={nextClick}/>
                    </div>
            </section>
        </>
    );
}