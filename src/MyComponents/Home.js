import React from 'react'
import Addtodo from './Addtodo'
import Todos from './Todos'
const Home = ({addtodo, todos,  onDelete}) => {
  return (
    <div>
      <Addtodo addtodo={addtodo} />
    <Todos todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default Home
