import './App.css';
import {Container} from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute'

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  /* 
    useEffect(()=> {
      - 인자로 함수를 받음 -> 콜백함수
      - Mount --> 화면에 첫 렌더링
      - Update --> 다시 렌더링
      - UpMount --> 화면에서 사라짐

      1) useEffect (()=>{})
      -> 화면에 처음 렌더링될 때 실행 -> 빈 배열값을 전달하면 화면에 첫 렌더링 할때만 실행

      2) useEffect (() => {},[value])
      --> value의 값이 바뀔 때마다 실행
    })
  */
  useEffect(() => {
    console.log(authenticate)
  },[authenticate])
  return (
    <div className="App">
      <Container>
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          {/* <Route path='/Product/:id' element={<ProductDetail />} /> */}

          {/* privateRoute 설정 */}
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
          <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
