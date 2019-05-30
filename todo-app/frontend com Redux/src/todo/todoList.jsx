import React, { Component } from 'react'
import { connect } from "react-redux"
import Moment from 'react-moment';

import IconButtons from "../template/iconButton"

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <Moment date={todo.createdAt} format="DD/MM/YYYY HH:mm" />
        </td>
        <td>
          <IconButtons style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done} />
          <IconButtons style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done} />
          <IconButtons style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} hide={!todo.done} />
        </td>
      </tr>
    ))
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descriçao</th>
          <th>Data de Criaçao</th>
          <th className="tableActions">Açoes</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)