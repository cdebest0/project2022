import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/board/redux/store'


//Page
//지훈 작업 page
// import Home from "./pages/Home"
import BoardList from "./pages/board/BoardList"
import BoardInsert from "./pages/board/BoardInsert"
import BoardDetail from './pages/board/BoardDetail'
import BoardUpdate from './pages/board/BoardUpdate'
import Certification from './pages/join/Certification'
import JoinConditionsPerson from './pages/join/JoinConditions_person'
import PersonalInfo from './pages/join/Personal_info'

//로한님 작업 page
import Biz_info from './pages/join_business/Biz_info';
import Home from './pages/Home'
import JoinCompl from './pages/join_business/JoinCompl';
import SignIn from './pages/login/SignIn'
import FindAcct from './pages/lostInfo/FindAcct'
import NavBar from './components/nav/NavBar';
import FindAcctId from './components/lostInfo/FindAcctId';

function App() {

  // const [boards,setBoards] = useState('');
  // useEffect(() => {
  //   axios.get("http://localhost:8000/JAVA_CAMP/board/boardAdList.kh").then(response => {
  //     setBoards(response.data)
  //   })
  // })

  return (
    <Provider store={store}>
      <NavBar />
    <Routes>
      {/* ------------ 지훈 작업 -------------*/}
      {/* 메인 페이지 */}
      {/* <Route path='/' element={<Home />} /> */}

      {/* 자유 게시판 */}
      <Route path='/BoardList' element={<BoardList />} />
      <Route path='/BoardInsert' element={<BoardInsert />} />
      <Route path='/BoardDetail/:id' element={<BoardDetail />} />
      <Route path='/BoardUpdate' element={<BoardUpdate />} />

      {/* 개인 회원가입 */}
      <Route path='/Certification' element={<Certification />} />
      <Route path='/JoinConditionsPerson' element={<JoinConditionsPerson />} />
      <Route path='/PersonalInfo' element={<PersonalInfo />} />
      {/* ------------ 지훈 작업 end-------------*/}


      {/*------------ 로한님 작업 ------------*/}
      {/* 메인 페이지 */}
      <Route path='/' element={<Home />}/>

      {/* 로그인, 회원정보 찾기 */}
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/findacct' element={<FindAcct />}/>

      {/* 가입 */}
      <Route path='/biz_info' element={<Biz_info />}/>
      <Route path='/joincompl' element={<JoinCompl />}/>
      <Route path='/find' element={<FindAcctId />}/>
      {/*------------ 로한님 작업 End------------*/}

    </Routes>
    </Provider>
  );
};

export default App;