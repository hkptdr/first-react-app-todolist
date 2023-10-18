import './Homestyle.css';
import React,{useState} from 'react';
import Tasks from './Task';
const Home = () =>{
        const[task,setTask] = useState([]);
        const[title,setTitle] = useState("");
        const[description,setDescription] = useState("");
           
        const submitHandler = (event) => {
            event.preventDefault();
            if(title==="") return;
            setTask([...task , {title , description}])
           setTitle("");
           setDescription("");
        }

        const getTitle = (e) =>{
            setTitle(e.target.value);
        }

        const getDescription = (e) =>{
            setDescription(e.target.value);
        }

        const deleteItem = (index) =>{
            const filteredArray = task.filter((val,i) => {
                return i!==index;
                
            })
            console.log(index);
            setTask(filteredArray);
        }
    return(
    <div className = "container">
          <h1>Daily Tasks</h1>
        <form onSubmit = {submitHandler}>
            <input type = "text" placeholder = "Enter Task" value = {title} onChange = {getTitle}/>
            <textarea placeholder = "Enter description" value = {description} onChange = {getDescription}></textarea>
            <button>Add your Task</button>
           
        </form>
        {task.map((item , index) => (
                <Tasks 
                key = {index}
                title = {item.title} 
                description = {item.description}
                index = {index}
                deleteItem = {deleteItem}/>
            ))}
    </div>
);
}
export default Home;