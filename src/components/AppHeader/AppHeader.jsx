import { Avatar, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

import './AppHeader.css';

const AppHeader = () => {

  return (
    <Header className='six-pack-mind-header'>
      <Title level={3}>Six Pack Mind</Title>
      <div className='six-pack-mind-admin'>
        <Avatar icon={<UserOutlined />} />
        <Title level={5}>Karthik</Title>
      </div>
    </Header>
  )
}

export default AppHeader