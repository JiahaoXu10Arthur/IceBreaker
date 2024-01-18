import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/CreateRoomPage" element={<CreateRoomPage />} />
//         <Route path="/JoinRoomPage" element={<JoinRoomPage />} />
//         <Route path="/WaitRoomPage" element={<WaitRoomPage />} />
//         <Route path="/UserProfilePage" element={<UserProfilePage />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
reportWebVitals();