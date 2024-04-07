import './App.css'
import PageHeader from './component/pageHeader';
import RouterPage from './router/RouterPage'
import { tokenLoginRequest } from './request';
import { useCallback, useEffect, Profiler } from 'react';
import { getLocalToken } from './utils/storage';
import { useDispatch } from "react-redux";
function App() {

  const dispatch = useDispatch()

  const tokenLogin = useCallback(async () => {
    const token = getLocalToken()
    if (!token) return
    dispatch({ type: 'setToken', token })
    const res = await tokenLoginRequest()
    if (res) dispatch({ type: 'setUser', user: res.data })
  }, [dispatch])

  useEffect(() => {
    tokenLogin()
  }, [tokenLogin])


const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log(`${id} ${phase} in ${actualDuration}ms`);
};

  return (
    <Profiler id="Profiler" onRender={onRenderCallback}>
      <div className='app'>
        <div className='app-header'>
          <PageHeader></PageHeader>
        </div>
        <div className='app-main'>
          <RouterPage></RouterPage>
        </div>
      </div>
    </Profiler>
  );
}
export default App;
