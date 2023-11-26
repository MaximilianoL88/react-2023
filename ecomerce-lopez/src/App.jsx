import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css'
import NavBar from "./componetes/NavBar/NavBar"
import ItemDetailContainer from "./componetes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componetes/ItemListContainer/ItemListContainer"
import Form from "./componetes/Form/Form"


function App() {
  const title="Bienvenidos a Tienda Online"
  const title2="Compra aquí"
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer
          titulo={title}
          subtitulo={title2}
          />} />
        <Route path="/categoria/:cid" element={<ItemListContainer titulo={title}
          subtitulo={title2}/>} ></Route>
        <Route path="/Detail/:pid" element={ <ItemDetailContainer/>} />  
        <Route path="*" element={<Navigate to="/"/> } /> 
      </Routes>
      <Form></Form>
   </Router>

  )
}

export default App
