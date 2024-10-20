import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskBoard } from './components/TaskBoard';

function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <TaskBoard />
      </main>
    </>
  )
}

export default App
