import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/login/index.tsx';
import VideoCall from './components/videoCall/index.tsx';
import { PaymentGateway } from './components/paymentGateway/index.tsx';
import { RegisterEspecialist } from './componentsAdmin/registerEspecialist/index.tsx';
import axios from 'axios';
import '../src/css/App.scss';
import Layout from './layout/layout.tsx';
import Home from './components/home/index.tsx';
import MercadoPago from './components/mercadoPago/MercadoPago.tsx';
import ProfileComponent from './Pages/Profile.tsx';

axios.defaults.baseURL = 'https://telemedicina-v1-0.onrender.com';

export const App: React.FC = () => {
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<PaymentGateway />} />
          <Route path='/prueba-mp' element={<MercadoPago />} />
          <Route path='/profile' element={<ProfileComponent />} />
          <Route
            path='/video-call'
            element={
              <VideoCall
                isOpen={isVideoCallOpen}
                onClose={() => setIsVideoCallOpen(false)}
              />
            }
          />
          <Route
            path='/registerespecialist'
            element={<RegisterEspecialist />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
