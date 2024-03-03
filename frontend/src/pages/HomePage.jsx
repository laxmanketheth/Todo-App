
import './HomePage.css'
import AddToDoForm from '../components/AddToDoForm/AddToDoForm'
import Title from '../components/Title/Title'
import ToDoList from '../components/ToDoList/ToDoList'
import OldTodos from '../components/OldTodos/OldTodos'
import RecentlyAdded from '../components/RecentlyAdded/RecentlyAdded'
import OldTodoHeading from '../components/OldTodoHeading/OldTodoHeading'


function HomePage() {

    return (
        <>
            <div className='container'>
                <Title />
                <AddToDoForm />
                <RecentlyAdded/>
                <ToDoList />
                <hr />
                <OldTodoHeading/>
                <OldTodos />
            </div>
        </>
    )
}

export default HomePage
