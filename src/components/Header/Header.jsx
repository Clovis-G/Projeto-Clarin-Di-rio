import './Header.css'

export function Header({theme, themeChange}){

    const day = new Date().toLocaleDateString('pt-BR',{
        weekday: 'long', day: 'numeric', month: 'long', year:'numeric'
    })

    return(
        <header className="main__header">
            <div className="header__container">
                <span>Edição de New York</span>
                <span className='data'>{day}</span>
                <span>Dólar fecha em <b>5.22</b> reais</span>
                <button className="btn__theme__change" onClick={themeChange}>{theme === 'light' ? 'Escuro' : 'Claro'}</button>
            </div>
            <h1 className="clarin__title">Clarin Diário</h1>
            <p className="clarin__description">Clarim Diário é um Jornal que relata a verdade - Doa a quem doer!</p>

            <nav className="navegation__header">
                <a href="#">Economia</a>
                <a href="#">Investimento científico</a>
                <a href="#">Sustentabilidade</a>
                <a href="#">Política</a>
                <a href="#">tecnologia</a>
            </nav>
        </header>
    )
}
export default Header