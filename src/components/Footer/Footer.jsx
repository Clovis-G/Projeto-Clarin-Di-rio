import './Footer.css'

export function Footer(){
    return(
        <footer className="clarin__footer">
            <h3 className="footer__title">Clarin-Diário</h3>
            <p className="footer__description">Notícias e informações em tempo real com presição e atualizações diárias sobre o Brasil e o mundo.</p>
            <div className="footer__container">
                <div className="navegation__section">
                    <h4 className="navegation__title">Navegação</h4>
                    <ul className="list__item">
                        <li className="itens"><a href="#"> Início</a></li>
                        <li className="itens"><a href="#"> Economia</a></li>
                        <li className="itens"><a href="#"> Investimento científico</a></li>
                        <li className="itens"><a href="#"> Sustentabilidade</a></li>
                        <li className="itens"><a href="#"> Política</a></li>
                        <li className="itens"><a href="#"> tecnologia</a></li>
                    </ul>
                </div>
                <div className="navegation__section">
                    <h4 className="navegation__title">Institucional</h4>
                    <ul className="list__item">
                        <li className="itens"><a href="#"> Sobre nós</a></li>
                        <li className="itens"><a href="#"> Nossa equipe</a></li>
                        <li className="itens"><a href="#"> Expediente</a></li>
                        <li className="itens"><a href="#"> Termos de uso</a></li>
                        <li className="itens"><a href="#"> Privacidade</a></li>
                    </ul>
                </div>
                <div className="navegation__section">
                    <h4 className="navegation__title">Contato</h4>
                    <ul className="list__item">
                        <li className="itens"><a href="#"> Fale conosco</a></li>
                        <li className="itens"><a href="#"> E-mail</a></li>
                        <li className="itens"><a href="#"> Redes sociais</a></li>
                    </ul>
                </div>
            </div>
            <p className="all__rights__reserved"><b>&copy 2026 Clarin Diário</b>Todos os direitos reservados</p>
            <p className="rights__policy">Política de Privacidade | Termos de Uso</p>
        </footer>
    )
}
export default Footer