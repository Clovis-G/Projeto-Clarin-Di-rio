import { useParams, Link} from 'react-router-dom'
import news  from '../../data/headlineNews.js'
import './Matters.css'

export function Matters(){
    const {id} = useParams()

    const newss = news.find(news => news.id === Number(id))
    if(!newss){
        return(
            <main className='main__Container'>
                <section className="section__container">
                    <Link to='/' className='to__go__back'>Voltar</Link>
                    <p className='result'>Página dessa matéria não existe.</p>
                </section>
            </main>
        )
    }
    return(
        <main className="main__container">
            <section className="section__container">
                <Link to='/' className='to__go__back'>Voltar</Link>
                <article className='news'>
                    <span className="matter__category">{newss.category}</span>
                    <h2 className="matter__title">{newss.title}</h2>
                    <p className="matter__sumary">{newss.sumary}</p>
                    <img className='demonstration__image' src={newss.image} alt="materia" />
                    <p className="description__image">Imagem ilustrativa</p>
                    <p className="text__new">{newss.textNew}</p>
                    <p className="font">Fonte:
                        <cite>
                            <a href={newss.newUrl}> {newss.font}</a>
                        </cite>
                    </p>
                </article>
            </section>
        </main>
    )
}
export default Matters