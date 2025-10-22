//In this we will learn about single page applications
import { useState } from 'react' 
import { BrowserRouter,Routes,Route,Link,useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
          <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}
function Layout(){
  return <div style={{height:"100vh",background:"green"}}>
    <Header/>
    <div style={{height: "90vh",background:"red"}}>
      <Outlet/>
    </div>
    Footer | Contact Us
  </div>
}
function Header(){
  return <div>
    <Link to="/">Allen</Link>
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>
}
function ErrorPage(){
   return <div>
    Sorry this page not found
   </div>
}
function Landing(){
  return <div>
    Welcome to Allen
  </div>
}
function Class11Program(){
  return <div>
    NEET Program for class 11
  </div>
}
function Class12Program(){
  const navigate = useNavigate();

  function redirect(){
    navigate('/')
  }
  return <div>
    NEET Program for class 12
    <button onClick={redirect}>Go back to landing page</button>
  </div>
}

export default App
