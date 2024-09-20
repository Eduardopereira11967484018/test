// src/app/page.tsx
import Header from './components/header.page/Header';
import TaskList from './components/header.page/TaskList.page/TaskList';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Header username="Eduardo" />
      <TaskList />
    </div>
  );
};

export default Home;
