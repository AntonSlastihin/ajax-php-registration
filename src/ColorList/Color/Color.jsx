import RatingStars from "../../RatingStars/RatingStars"
import Star from "../../RatingStars/Star/Star"
import { Component } from 'react';
import PropTypes from 'prop-types';


class Color extends Component {
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }
    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = "white"
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
        //вызывается если shouldComponentUpdate возвращает true

    }
    componentDidUpdate(prevProps) {
        const { title, rating } = this.props
        //new props 
        const status = (rating > prevProps.rating) ? "больше" : "меньше"
        setTimeout(() => {
            this.refs.title.style.backgroundColor = ''
            this.refs.title.style.color = 'black'
        }, 3000)
    }
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props //сохраняет состоянии старого props
        return rating !== nextProps.rating
    }
    render() {
        const { title, color, rating, onRate, onRemove } = this.props
        return <div className="color-item" style={this.style}>
            <h2 className="title_color" ref="title">{title}</h2>
            <button onClick={onRemove}>X</button>
            <div className="bg-item" style={{ backgroundColor: color }}></div>
            <RatingStars selected={rating} onRate={onRate} totalStars={10} />
        </div>
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
}
Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f => f
}

export default Color