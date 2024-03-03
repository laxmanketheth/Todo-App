
import { Provider } from 'react-redux'
import './App.css'
import DeletePopUp from './components/deletePopup/DeletePopUp'
// import AddToDoForm from './components/AddToDoForm/AddToDoForm'
// import Title from './components/Title/Title'
// import ToDoList from './components/ToDoList/ToDoList'
// import { Provider } from 'react-redux'
import store from './store/store'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/deleteAlltodo" element={<DeletePopUp/>}/>
         
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
