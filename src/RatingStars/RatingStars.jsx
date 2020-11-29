import Star from "./Star/Star"

const RatingStars = ({totalStars = 5, selected = 0, onRate}) => {
    return (
        <div className="rating-class">
            {[...Array(totalStars)].map((n, i) => {
               return <Star key={i} selected={i < selected} onClick={() => onRate(i+1)} />
            })}
        </div>
    )
}
export default RatingStars