import { NewsCards } from '../../components/NewsCards/NewsCards.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'

import news from'../../data/headlineNews.js'
import './Home.css'

export function Home(){
    const [headline, ...newsTooMuch] = news
    
    return(
        <>
            <main className="main__container">
                <div className="division__container">
                    <b>Clarin Diário - Observações</b>
                    <p className="clarin__news"><b>Banco de Notícias: </b>Cada notícia abaixo foi redigida com base em apurações e projeções de veículos e órgãos oficiais (fonte citada ao final de cada texto), com os fatos reescritos em texto original — não são cópias de nenhuma matéria.</p>
                </div>
                <section className="section__container">
                <NewsCards
                    id = {headline.id}
                    category = {headline.category}
                    title = {headline.title}
                    sumary = {headline.sumary}
                    />
                </section>
                <section className="grid">
                    {newsTooMuch.map(newMore => (
                        <NewsCards
                        id = {newMore.id}
                        category = {newMore.category}
                        title = {newMore.title}
                        sumary = {newMore.sumary}
                        />
                    ))}
                </section>
            </main>
            <Footer/>
    </>
    )
}
export default Home