import Header from './Header'
import ActionBar from './ActionBar'
import Container from './Container'
import { Component } from 'react';

class App extends Component {
  state = {
    items: [
      {
        title: "Do laundry",
        status: 0
      },
      {
        title: "Study for mock exam",
        status: 0
      },
      {
        title: "Do the chores",
        status: 0
      },
      {
        title: "Study ReactJS",
        status: 0
      }
    ]
  }

  removeItem = (index) => {
    const {items} = this.state

    this.setState({
      items: items.filter((item, i) => {
        return i!==index
      })
    })
  }

  checkItem = (id) => {
    const {items} = this.state

    this.setState({
      items: items.map((item, i) => {
        if (i === id) {
          if (item.status === 0) {
            item.status = 1
          } else (
            item.status = 0
          )
        }
        return item

      })
    })
  }

  handleSubmit = (item) => {
    this.setState({items: [...this.state.items, item]})
  }

  render() {

    const {items} = this.state

    return(
      <div>
        <Header />
        <ActionBar handleSubmit={this.handleSubmit}/>
        <Container items={items} removeItem={this.removeItem} checkItem={this.checkItem} />
    </div>
    )
  }
}


export default App;
