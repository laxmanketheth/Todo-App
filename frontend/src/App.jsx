
import './App.css'
import AddToDoForm from './components/AddToDoForm/AddToDoForm'
import Title from './components/Title/Title'
import ToDoList from './components/ToDoList/ToDoList'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Title />
        <AddToDoForm />
        <ToDoList />
      </Provider>
    </>
  )
}

export default App
