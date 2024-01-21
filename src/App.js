import './App.css'
import PageHeader from './component/pageHeader';
import RouterPage from './router/RouterPage'
import { tokenLoginRequest } from './request';
import { useCallback, useEffect } from 'react';
import { getLocalToken } from './utils/storage';
import { useDispatch } from "react-redux";
function App() {

  const dispatch = useDispatch()

  const tokenLogin = useCallback(async () => {
    const token = getLocalToken()
    if (!token) return
    dispatch({ type: 'setToken', token })
    const res = await tokenLoginRequest()
    dispatch({ type: 'setUser', user: res.data })
  }, [dispatch])

  useEffect(() => {
    tokenLogin()
  }, [tokenLogin])


  return (
    <div className='app'>
      <div className='app-header'>
        <PageHeader></PageHeader>
      </div>
      <div className='app-main'>
        <RouterPage></RouterPage>
      </div>
    </div>
  );
}

export default App;
