// importações de assets
import city from "../assets/city.jpg"

const TrabalhandoComImagens = () => {
    return (
        <div>
            <h1>Sessão 3</h1>
            <hr />
            <h3>Trabalhando com Imagens</h3>

            <h4>Imagem publica</h4>
            <div>
                <img src="/img1.jpg" alt="paisagem" />
            </div>

            <h4>Imagem dentro do SRC, pasta ASSETS</h4>
            <div>
                <img src={city} alt="paisagem" />
            </div>
        </div>
    )
}

export default TrabalhandoComImagens