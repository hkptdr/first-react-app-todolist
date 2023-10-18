const Tasks = ({title , description , index , deleteItem}) =>{
    return(
        <div className = "task"> 
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <button onClick = {() =>deleteItem(index)}>-</button>
        </div>
    );
}
export default Tasks;