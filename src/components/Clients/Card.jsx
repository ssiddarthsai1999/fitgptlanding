function Card({ title, description, imageUrl, currentIndex, index }) {
    const active = currentIndex === index;
    const classes = `card ${active ? "active" : ""}`;

    return (
        <div className={classes}>
            <img src={imageUrl} alt={title} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
export default Card