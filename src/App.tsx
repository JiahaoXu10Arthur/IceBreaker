import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import JoinRoomPage from './JoinRoomPage';
import WaitRoomPage from './WaitRoomPage';
import UserProfilePage from './UserProfilePage';
import CreateRoomPage from './CreateRoomPage';

const App = () => {
  return (
    <div className='app'>
      <Router basename="/project/2023/60021/g236002112/zixi">
        <div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/CreateRoomPage' element={<CreateRoomPage />} />
            <Route path='/JoinRoomPage' element={<JoinRoomPage />} />
            <Route path='/WaitRoomPage' element={<WaitRoomPage />} />
            <Route path='/UserProfilePage' element={<UserProfilePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
