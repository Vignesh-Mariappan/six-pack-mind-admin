import { Content } from 'antd/es/layout/layout';
import useFetchUsersCollection from '../../hooks/useFetchUsersCollection';
import './AppContent.css';
import DailyUserActivities from './DailyUserActivities';
import WeeklyUserActivities from './WeeklyUserActivities';

const AppContent = () => {

  // data fetched from firebase
  const usersData = useFetchUsersCollection('users');

  return (
    <Content className='app-content'>
      <DailyUserActivities usersData={usersData} />
      <WeeklyUserActivities usersData={usersData} />
    </Content>
  )
}

export default AppContent