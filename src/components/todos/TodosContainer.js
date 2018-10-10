import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map((task, id) => {
       
      return (<Todo key={id} text={task} />)
    })
  }

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    todos: state.todos,
  })
}

export default connect(mapStateToProps)(TodosContainer)
