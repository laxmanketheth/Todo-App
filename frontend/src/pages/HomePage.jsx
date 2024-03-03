
import './HomePage.css'
import AddToDoForm from '../components/AddToDoForm/AddToDoForm'
import Title from '../components/Title/Title'
import ToDoList from '../components/ToDoList/ToDoList'
import OldTodos from '../components/OldTodos/OldTodos'


function HomePage() {

    return (
        <>
                        <div className='container'>
                            <Title />
                            <AddToDoForm />
                            <h3>Recently Added</h3>
                            <ToDoList />
                            <h2>Old Todos</h2>
                            <OldTodos />
                        </div>
        </>
    )
}

export default HomePage
