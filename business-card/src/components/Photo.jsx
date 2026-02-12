import photo from "/ferrari.jpg"
export default function Photo() {

    return (
        <div className="photo">
            <img src={photo} alt="Photo" className="card-image"/>
        </div>
    )
}