

import { Button, Typography } from 'antd';
import { signInWithPopup, signOut } from 'firebase/auth';
import { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../App';
import { auth, googleProvider } from '../firebase/config';
import { GoogleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const LoginPage = () => {
    const authentication = useAuth();

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error('Error signing in with google ', err);
          alert('Error signing in with google')
        }
      }


    if(authentication && authentication.user && authentication?.user?.email === 'blessedconsciousnessmovement@gmail.com') {
      
      return <Navigate to='/' />
    } else if(authentication && authentication.user && authentication?.user?.email !== 'blessedconsciousnessmovement@gmail.com') {
      auth && signOut(auth);
      alert('Signed in user is not authorized')
    }

  return (
    <div className='login-page'>
        <div className="login-page-wrapper">
            <Title level={2}>Six Pack Mind Admin</Title>
            <Button type="primary" icon={<GoogleOutlined />} onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
    </div>
  )
}

const MemoizedLoginPage = memo(LoginPage)

export default MemoizedLoginPage