
import './App.css'
import DeletePopUp from './components/deletePopup/DeletePopUp'
import store from './store/store'
import { Provider } from 'react-redux'
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
