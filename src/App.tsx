import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { TodoPage } from './pages/TodoPage/TodoPage';
import styles from './styles/global.scss';


function App() {

  return (

    //т.к в тз указывался редирект, я использовал реакт роутер дом для этого

    <main className={styles['']}>
      <Routes>
        <Route path='/' element={<TodoPage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
      </Routes>
    </main>
  )
}

export default App;
