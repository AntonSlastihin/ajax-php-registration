import { Component } from 'react';
import AddColorForm from './AddColorForm/AddColorForm';
import './App.css';
import { v4 } from 'uuid'
import ColorList from './ColorList/ColorList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colors: [
        {
          "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          "title": "ocean at dusk",
          "color": "#00c4e2",
          "rating": 5
        },
        {
          "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
          "title": "lawn",
          "color": "#26ac56",
          "rating": 3
        },
        {
          "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
          "title": "bright red",
          "color": "#ff0000",
          "rating": 0
        }
      ]
    }
    this.addNewColor = this.addNewColor.bind(this)
    this.onRate = this.onRate.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }
  addNewColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({ colors })
  }
  onRemove(color_id) {
    const colors = this.state.colors.filter(color => color.id !== color_id)
    this.setState({colors})
  }
  onRate(color_id, rating){
    //console.log(color_id, rating)
    const colors = this.state.colors.map((color, id) => {
      if (color.id === color_id){
          color.rating = rating
      }
      return color
    })
    this.setState({colors})
  }
  render() {
    const { addNewColor, onRemove, onRate} = this
    const { colors } = this.state
    return (
      <div className="App">
        <AddColorForm addNewColor={addNewColor} />
        <ColorList colors={colors}
          onRemove={onRemove} 
          onRate={onRate}/>
      </div>
    );
  }
}
export default App;
