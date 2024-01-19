import { HashRouter } from 'react-router-dom';
import './App.css'
import PageHeader from './component/pageHeader';
import RouterPage from './router/RouterPage'
import { tokenLoginRequest } from './request';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    tokenLoginRequest()
  },[])
  return (
    <div className='app'>
      <HashRouter>
        <div className='app-header'>
          <PageHeader></PageHeader>
        </div>
        <div className='app-main'>
          <RouterPage></RouterPage>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
