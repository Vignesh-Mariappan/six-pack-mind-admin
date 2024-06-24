import { Table, Tag, Typography } from 'antd';
import './AppContent.css';

const DailyUserActivities = ({ usersData = [] }) => {
    const { Title } = Typography;
  
    // data source for table
    const usersDataSource = usersData?.map(user => {
  
      const activityDWBr = user?.activities[0]['Date with breath'];
      const activityDWB = user?.activities[1]['Date with body'];
      const activityDWF = user?.activities[2]['Date with food'];
      const activityHBr = user?.activities[3]['Hourly breaths'];
      const activityCB = user?.activities[4]['Count blessings'];
      const activityTT = user?.activities[5]['Tough things'];
  
      const dateWithBreath = activityDWBr[activityDWBr.length - 1] === new Date().toDateString();
      const dateWithBody = activityDWB[activityDWB.length - 1] === new Date().toDateString();
      const dateWithFood = activityDWF[activityDWF.length - 1] === new Date().toDateString();
      const hourlyBreaths = activityHBr[activityHBr.length - 1] === new Date().toDateString() || false;
      const countBlessings = activityCB[activityCB.length - 1] === new Date().toDateString();
      const toughThings = activityTT[activityTT.length - 1] === new Date().toDateString(); 
  
      const totalCount = [ dateWithBreath, dateWithBody, dateWithFood, hourlyBreaths, countBlessings, toughThings ]?.filter(
        activity => activity === true
      )?.length
  
      const currentUser = {
        key: user?.displayName,
        name: user?.displayName,
        date: new Date().toDateString(),
        dateWithBreath: dateWithBreath ? 'Marked' : 'Not Marked',
        dateWithBody: dateWithBody ? 'Marked' : 'Not Marked',
        dateWithFood: dateWithFood ? 'Marked' : 'Not Marked',
        hourlyBreaths: hourlyBreaths ? 'Marked' : 'Not Marked',
        countBlessings: countBlessings ? 'Marked' : 'Not Marked',
        toughThings: toughThings? 'Marked' : 'Not Marked',
        totalCount: totalCount || 0
      }
  
      return currentUser;
    });
  
    // table columns
    const dailyActivitiesTableCols = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Date with breadth',
        dataIndex: 'dateWithBreath',
        key: 'dateWithBreath',
        render: (_, { dateWithBreath }) => {
          let color = dateWithBreath === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {dateWithBreath.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Date with body',
        dataIndex: 'dateWithBody',
        key: 'dateWithBody',
        render: (_, { dateWithBody }) => {
          let color = dateWithBody === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {dateWithBody.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Date with food',
        dataIndex: 'dateWithFood',
        key: 'dateWithFood',
        render: (_, { dateWithFood }) => {
          let color = dateWithFood === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {dateWithFood.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Hourly breaths',
        dataIndex: 'hourlyBreaths',
        key: 'hourlyBreaths',
        render: (_, { hourlyBreaths }) => {
          let color = hourlyBreaths === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {hourlyBreaths.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Count blessings',
        dataIndex: 'countBlessings',
        key: 'countBlessings',
        render: (_, { countBlessings }) => {
          let color = countBlessings === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {countBlessings.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Tough things',
        dataIndex: 'toughThings',
        key: 'toughThings',
        render: (_, { toughThings }) => {
          let color = toughThings === 'Marked' ? 'green' : 'red';
          return (
            <Tag color={color}>
              {toughThings.toUpperCase()}
            </Tag>
          )
        }
      },
      {
        title: 'Total Marked',
        dataIndex: 'totalCount',
        key: 'totalCount',
      },
    ];
  
    return (
      <>
          <Title level={4}>Daily user activities</Title>
          <Table dataSource={usersDataSource} columns={dailyActivitiesTableCols} scroll={{
            x: 1300,
          }} bordered />
      </>
    )
}

export default DailyUserActivities