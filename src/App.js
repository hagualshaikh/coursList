import React,{Component} from 'react';
import CoursForm from './components/coursFrom';
import CoursList from './components/coursList';

class App extends Component{
  state= {
    courses :[
      {name:"HTML"},
      {name:"CSS"},
      {name:"jQuery"},
    ],current:""
  }

  UpdateCourse=(e)=>{
  this.setState({
    current:e.target.value });
  }



   AddCourse =(e)=>{
      
     let {current} = this.state;
     let {courses} = this.state;
     courses.push({name:current})
     this.setState({
       courses:courses,
       current:"" 
       });
    


   }
   deleteCourse =(index) =>{
     let {courses} = this.state;
     courses.splice(index,1)
     this.setState({
       courses: courses});

   }
   editCourse =(index,value)=>{
  let {courses} = this.state;
  let  course =courses[index];
  course['name']= value;
  this.setState({
    courses 
  });
   }

  render () {
     const {courses} =  this.state;
     const coursList = courses.map((course,index) => {
       return <CoursList details={course} key={index}updaate={this.handleChange}
        index={index} deleteCourse={this.deleteCourse } editCourse={this.editCourse}/>
       
     }) 
    return (
    <section className="App">
      <h2>Appcoures</h2>
    
      
      
      <CoursForm  UpdateCourse={this.UpdateCourse} AddCourse={this.AddCourse} current={this.state.current}/>
      
     <ul>{coursList}</ul>
    
    </section>
  );
  }
  
}

export default App;
