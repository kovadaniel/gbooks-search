import { FC } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import SearchPanel from './components/SearchPanel';
import { ConfigProvider, Layout, theme } from 'antd';

const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'cadetblue',
          borderRadius: 0,
          fontFamily: 'Montserrat'
        },
      }}>
      <Layout className="App">
        <SearchPanel 
          title='Search for books'/>
        <Layout.Content>
          <AppRouter/>
        </Layout.Content>
      </Layout>
    </ConfigProvider>
    
  );
}

export default App;
