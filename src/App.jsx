import './App.css';
import Main from './components/main';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      {/* <Layout/> */}
      <Layout title="Đây là trag APP nè">
        <Main />
      </Layout>

    </div>
  );
}

export default App;