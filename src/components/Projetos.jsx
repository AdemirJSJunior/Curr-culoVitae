const projetos = [
    {
        titulo: "Landing Page Pessoal",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic quisquam odio quod excepturi nihil ab nemo illum quas voluptas, rem earum ipsa, maiores ad iste explicabo dolorum adipisci veniam.",
        imagem: "/projects/p1.png",
        site: "#",
        codigo: "https://github.com/user/projeto1"
    },

    {
        titulo: "Reserva de Salas Fatec",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic quisquam odio quod excepturi nihil ab nemo illum quas voluptas, rem earum ipsa, maiores ad iste explicabo dolorum adipisci veniam.",
        imagem: "/projects/p2.png",
        site: "#",
        codigo: "https://github.com/user/projeto2"
    },

    {
        titulo: "Projeto Simbiose",
        descricao: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic quisquam odio quod excepturi nihil ab nemo illum quas voluptas, rem earum ipsa, maiores ad iste explicabo dolorum adipisci veniam.",
        imagem: "/projects/p3.png",
        site: "#",
        codigo: "https://github.com/user/projeto3"
    },
];

export default function Projetos(){
    return(
        <section id="projetos" className="projetos">
            <div className="container">
                <header className="projetos_cabeca">
                    <span className="eyebrow">Portifólio</span>
                    <h2 className="projetos_titulo">Projetos</h2>
                </header>
                <div className="projetos_grid">
                    {projetos.map((p) =>(
                        <article className="projeto" key={p.titulo}>
                            <div className="projeto_tumb">
                                <img src={p.imagem} alt={`Imagem do Projeto ${p.titulo}`}/>
                            </div>
                            <div className="projeto_corpo">
                                <h3 className="projeto_titulo">{p.titulo}</h3>
                                <p className="projeto_descricao">{p.descricao}</p>
                                <div className="projeto_acoes">
                                    <a 
                                        className="botao botao--primario"
                                        href={p.site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir site do projeto ${p.titulo}`}
                                    >
                                        Ver Site
                                    </a>
                                    <a 
                                        className="botao"
                                        href={p.codigo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Abrir código do projeto ${p.titulo}`}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}