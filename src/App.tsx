import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import JoinRoomPage from './JoinRoomPage';
import WaitRoomPage from './WaitRoomPage';
import UserProfilePage from './UserProfilePage';
import CreateRoomPage from './CreateRoomPage';

const App = () => {
    return (
        <div className="app">
          <Routes> 
            <Route path="/" element={<Homepage />} />
            <Route path="/CreateRoomPage" element={<CreateRoomPage />} />
            <Route path="/JoinRoomPage" element={<JoinRoomPage />} />
            <Route path="/WaitRoomPage" element={<WaitRoomPage />} />
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
          </Routes>
        </div>
    );
  };

export default App;