import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Calendar from './components/Calendar';
import { Button, Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

function View() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: 830, height: '98vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              // icon: <UserOutlined />,
              label: 'Calendar',
              onClick: () => navigate('/'),
            },
            {
              key: '2',
              // icon: <VideoCameraOutlined />,
              label: 'Room Type',
              onClick: () => navigate('/type'),
            },
            {
              key: '3',
              // icon: <UploadOutlined />,
              label: 'History',
              onClick: () => navigate('/log'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <div>
          <Button>7</Button>
          <Button>15</Button>
          <Button>30</Button>
        </div>

        <Routes>
          <Route path="/" Component={Calendar} />
        </Routes>
      </Layout>
      <Footer
        style={{ position: 'absolute', left: '50%', bottom: 0, padding: 0 }}
      >
        ©2023 Created by Don Ryu
      </Footer>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <View />
    </Router>
  );
}
