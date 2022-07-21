const Events = () => {
    const handlerMyEvent = () => {
        console.log("Botão clicado.")
    };

    const handlerMyEventComParametroEvent = (event) => {
        console.log(event)
    };

    return (
        <div>
            <hr />
            <h1>Eventos</h1>

            <div>
                <button onClick={handlerMyEvent}>Clique em mim</button>
            </div>
            <div>
                <button onClick={handlerMyEventComParametroEvent}>Botão com parametro</button>
            </div>
            <div>
                <button onClick={() => alert("Evento inline")}>Botão evento inline</button>
            </div>

            <hr />
        </div>
    )
}

export default Events; 