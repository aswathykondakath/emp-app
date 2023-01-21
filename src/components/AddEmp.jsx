import React from 'react'
import Navbar from './Navbar'
import { Button,  Form ,Segment} from 'semantic-ui-react'

const AddEmp = () => {
    
  return (
    <div>
        <Navbar/>
        <h2><center>Enter Employee Details</center></h2>
    <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal' >
       
        <Form.Input fluid label='Name' placeholder='Enter Name' required/><br/>
        <Form.Input fluid label='Designation' placeholder='Enter Designation' required /><br/>
        <Form.Input fluid label='Location' placeholder='Enter Location' required/><br/>
        <Form.Input fluid label='Salary' placeholder='Enter Salary' required/>
      </Form.Group>
     <center>
      <Button type='submit'>Submit</Button></center>
    </Form>
  </Segment>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
  )
}

export default AddEmp
