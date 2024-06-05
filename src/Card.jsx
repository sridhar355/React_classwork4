function Card({quote, author}){
    return (
        <div className="card">
            <p>{quote}</p>
            <p className="author">{author}</p>
        </div>
    )
}
export default Card