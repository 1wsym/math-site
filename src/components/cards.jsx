import '../assets/styles/cards.css'
import '../assets/images/placeholder.jpg'

function Card({ title, description, link = '#', newsImage, isNews = false }) {
    return (
        <>
            <div className="card">
                {newsImage ? (
                    <img src={newsImage} className="card-img" />
                ) : isNews ? (
                    <img src={placeholder} className="card-img" />
                ) : null}
                <h3><a href={link}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Card;