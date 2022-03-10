import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/board/redux/store'


//Page
import Home from "./pages/Home"
import BoardList from "./pages/board/BoardList"
import BoardInsert from "./pages/board/BoardInsert"
import BoardDetail from './pages/board/BoardDetail'
import BoardUpdate from './pages/board/BoardUpdate'
import Certification from './pages/join/Certification'
import JoinConditionsPerson from './pages/join/JoinConditions_person'
import PersonalInfo from './pages/join/Personal_info'

function App() {

  // const [boards,setBoards] = useState('');
  // useEffect(() => {
  //   axios.get("http://localhost:8000/JAVA_CAMP/board/boardAdList.kh").then(response => {
  //     setBoards(response.data)
  //   })
  // })

  return (
    <Provider store={store}>
    <Routes>
      {/* 메인 페이지 */}
      <Route path='/' element={<Home />} />

      {/* 자유 게시판 */}
      <Route path='/BoardList' element={<BoardList />} />
      <Route path='/BoardInsert' element={<BoardInsert />} />
      <Route path='/BoardDetail/:id' element={<BoardDetail />} />
      <Route path='/BoardUpdate' element={<BoardUpdate />} />

      {/* 개인 회원가입 */}
      <Route path='/Certification' element={<Certification />} />
      <Route path='/JoinConditionsPerson' element={<JoinConditionsPerson />} />
      <Route path='/PersonalInfo' element={<PersonalInfo />} />
      
    </Routes>
    </Provider>
  );
};

export default App;