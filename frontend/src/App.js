import Header from './components/Header'
import Login from './components/Login'
function App() {

const klik = (e) => {
  console.log(e)
}


  return (
    <>
      <Header title='Shoping List' btnName='Klik' onClick={klik}/>
      <Login />
    </>
  )
}

export default App;
