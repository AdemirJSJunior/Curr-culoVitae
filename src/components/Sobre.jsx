export default function Sobre(){
    return(
        <section id="sobre" className="sobre">
            <div className="container sobre_conteudo">
                <header className="sobre_cabeca">
                    <span className="eyebrow">Quem sou</span>
                    <h2 className="sobre_titulo">Sobre mim</h2>
                </header>
                <div className="sobre_texto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente obcaecati a reprehenderit. Ad dicta nesciunt, ex quas placeat quo, optio ipsum nisi animi ea voluptates, delectus deserunt vel at ipsam?
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident fugit illum iure ut culpa quam dicta sunt sed fuga optio nam, excepturi dolorum autem porro, nobis unde earum! Et, sed?                
                </div>
                <ul className="sobre_infos">
                    <li><span><strong>Foco</strong><p>Front-End - React</p></span></li>
                    <li><span><strong>Local</strong><p>Brasil - Remoto / Presencial</p></span></li>
                    <li><span><strong>Stack</strong><p>HTML, CSS, JS, React</p></span></li>
                    <li><span><strong>Estudando</strong><p>Acessibilidade e UI</p></span></li>
                </ul>
            </div>
        </section>
    );
}