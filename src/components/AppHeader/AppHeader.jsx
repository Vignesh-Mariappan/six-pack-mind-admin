import { Avatar, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { PiSignOutBold } from "react-icons/pi";

const { Title } = Typography;

import './AppHeader.css';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

const AppHeader = () => {

  const signOutUser = () => {
    auth && signOut(auth);
  }

  return (
    <Header className='six-pack-mind-header'>
      <Title level={3} className='six-pack-mind'>Six Pack Mind</Title>
      <div className='six-pack-mind-admin'>
        <Avatar icon={<UserOutlined />} />
        <Title level={5}>Karthik</Title>
        <PiSignOutBold size={'1.5rem'} color='red' style={{ cursor: 'pointer' }} onClick={signOutUser} />
      </div>
    </Header>
  )
}

export default AppHeader