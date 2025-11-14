export default function Cabecalho(){
    return(
        <header className="cabecalho">
            <div className="container cabecalho_conteudo">
                <a href="#" className="cabecalho_logo">Logo</a>

                <nav className="menu">
                    <a href="#destaque" className="menu_item">Início</a>
                    <a href="#sobre" className="menu_item">Sobre</a>
                    <a href="#habilidades" className="menu_item">Habilidades</a>
                    <a href="#projetos" className="menu_item">Projetos</a>
                    <a href="#contato" className="menu_item">Contato</a>
                </nav>

                <a href="/cv.pdf" className="botao botao--primario" download>
                    Baixar CV
                </a>
            </div>
        </header>
    );
}