import React from 'react'
import axios from 'axios'
import SingleStudent from './StudentList'

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      students : []
    }
  }

  async componentDidMount(){
  try {
    const result = await axios.get('/student')
    const data = result.data
    console.log(data)
    this.setState({
      students: data
    })
  } catch (error) {
    console.log(error)
    }
  }

  render(){
    console.log('!!!!!!!!!!!', this.state.students)
    return(
      <div>
        <ul>
          {this.state.students.map((student => {
            return <li key={student.id}> {student.firstName +" " + student.lastName}</li>
          }))}
        </ul>
        <SingleStudent />
      </div>
    )
  }
}

export default Main
