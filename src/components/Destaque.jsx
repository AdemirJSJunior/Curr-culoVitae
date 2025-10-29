export function Destaque(){
    return(
        <section id="destaque" className="destaque">
            <div className="container destaque_conteudo">
                <div className="destaque_texto">
                    <p className="destaque_intro">Desenvolvedor Front-End</p>
                    <h1 className="destaque_titulo">Olá, eu sou <span className="destaque_nome">Ademir Júnior</span></h1>
                    <p className="destaque_descricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque esse sapiente ratione consectetur laudantium cum, quasi aspernatur expedita nihil deleniti dolorum sunt repellat harum suscipit quaerat omnis iusto velit recusandae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos molestias, illo quae amet, provident ducimus porro eveniet, a sequi esse laudantium ut. Possimus est vitae dolore, cum vel expedita?
                    </p>
                    <div className="destaque_botoes">
                        <a href="#projetos" className="botao botao--primario">Ver Projetos</a>
                        <a href="#" className="botao" target="_blank">GitHub</a>
                    </div> 
                </div>
                <div className="destaque_foto">
                    <img src="/profile.jpg" alt="Foto de Perfil"/>
                </div>
            </div>
        </section>
    )
}