import './App.css'
import LoginPage from './page/loginPage';
import MainPage from './page/mainPage'
import RegisterPage from './page/registerPage';
import ProjectSetup from './page/projectSetup';
import PageHeader from './component/pageHeader';
function App() {
  return (
    <div className='app'>
      <div className='app-header'>
        <PageHeader></PageHeader>
      </div>
      <div className='app-main'>
        <MainPage></MainPage>
      </div>
    </div>
  );
}

export default App;
