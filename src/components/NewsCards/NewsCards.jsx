import {Link} from 'react-router-dom'

import './NewsCards.css'

export function NewsCards({id, category, title, sumary}){
    return(
        <article className="card">
            <h2 className="card__category">{category}</h2>
            <h3 className="card__title">
                <Link to={`/materia/${id}`}>{title}</Link>
            </h3>
            <p className="card__description">{sumary}</p>
        </article>
    )
}
export default NewsCards