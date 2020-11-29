import Color from "./Color/Color"

const ColorList = ({ colors, onRate, onRemove }) => {
    return (
        <div className="color-items">
            {(colors.length) ? colors.map((color, i) =>
                <Color {...color} key={i}
                    onRate={rating => onRate(color.id, rating)} 
                    onRemove={() => onRemove(color.id)}
                    />
            ): <span>Empty</span>}
        </div>
    )
}

export default ColorList