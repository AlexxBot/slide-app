import React, { useState } from 'react';

const indice = 0;

function Slides({slides}) {

    const [index, CambiarIndice] = useState(indice)
    const [prevEnabled, EstadoPrevio] = useState(false)
    const [nextEnabled, EstadoNext] = useState(true)
    const [restartEnabled, EstadoRestart] = useState(false)

    const siguiente = () => {  
        var nuevoIndice = index + 1    
        CambiarIndice(nuevoIndice)
        var estadoSiguiente = true;
        if(nuevoIndice === slides.length - 1){
            estadoSiguiente = false;
        } 
        EstadoNext(estadoSiguiente)
        EstadoPrevio(true)
        EstadoRestart(true)
        
    }

    const anterior = () => {
        var nuevoIndice = index - 1    
        CambiarIndice(nuevoIndice)
        var estadoAnterior= true;
        if(nuevoIndice === 0){
            estadoAnterior = false;
            EstadoRestart(false)
        } 
        EstadoPrevio(estadoAnterior)
        EstadoNext(true)
    }

    const restart = () => {
        CambiarIndice(0);
        EstadoPrevio(false)
        EstadoRestart(false)
        EstadoNext(true)
    }


    return (

        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick = {restart} disabled={!restartEnabled}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={anterior} disabled ={!prevEnabled}>Prev</button>
                <button data-testid="button-next" className="small" onClick={siguiente} disabled ={!nextEnabled}>Next</button>
            </div>
            
            {/* <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div> */}
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>


            
        </div>
    );

}

export default Slides;
