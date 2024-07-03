import { Progress, Table, Tag, Tooltip, Typography } from 'antd';
import './AppContent.css';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import * as XLSX from "xlsx";

const WeeklyUserActivities = ({ usersData = []}) => {
    const { Title, Paragraph } = Typography;

    const userActivities = [
        {'Date with breath': 'dateWithBreath'},
        {'Date with body': 'dateWithBody'},
        {'Date with food': 'dateWithFood'},
        {'Hourly breaths': 'hourlyBreaths'},
        {'Count blessings': 'countBlessings'},
        {'Tough things': 'toughThings'},
    ]

    const day1 = new Date().toDateString(); // today
    const day2 = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();
    const day3 = new Date(new Date().setDate(new Date().getDate() - 2)).toDateString();
    const day4 = new Date(new Date().setDate(new Date().getDate() - 3)).toDateString();
    const day5 = new Date(new Date().setDate(new Date().getDate() - 4)).toDateString();
    const day6 = new Date(new Date().setDate(new Date().getDate() - 5)).toDateString();
    const day7 = new Date(new Date().setDate(new Date().getDate() - 6)).toDateString();

    // data source for table
    const usersDataSource = usersData?.map(user => {
  
        const activityDWBr = user?.activities[0]['Date with breath'];
        const activityDWB = user?.activities[1]['Date with body'];
        const activityDWF = user?.activities[2]['Date with food'];
        const activityHBr = user?.activities[3]['Hourly breaths'];
        const activityCB = user?.activities[4]['Count blessings'];
        const activityTT = user?.activities[5]['Tough things'];

        // const activityDWBrLast7 = activityDWBr?.slice(activityDWBr.length - 7);
        // const activityDWBLast7 = activityDWB?.slice(activityDWB.length - 7);
        // const activityDWFLast7 = activityDWF?.slice(activityDWF.length - 7);
        // const activityHBrLast7 = activityHBr?.slice(activityHBr.length - 7);
        // const activityCBLast7 = activityCB?.slice(activityCB.length - 7);
        // const activityTTLast7 = activityTT?.slice(activityTT.length - 7);
    
        const currentUser = {
          key: user?.email,
          name: user?.displayName,
          [day1]: {
            dateWithBreath: activityDWBr?.includes(day1) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day1) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day1) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day1) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day1) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day1) ? 'Marked' : 'Not Marked',
          },
          [day2]: {
            dateWithBreath: activityDWBr?.includes(day2) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day2) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day2) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day2) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day2) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day2) ? 'Marked' : 'Not Marked',
          },
          [day3]: {
            dateWithBreath: activityDWBr?.includes(day3) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day3) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day3) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day3) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day3) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day3) ? 'Marked' : 'Not Marked',
          },
          [day4]: {
            dateWithBreath: activityDWBr?.includes(day4) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day4) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day4) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day4) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day4) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day4) ? 'Marked' : 'Not Marked',
          },
          [day5]: {
            dateWithBreath: activityDWBr?.includes(day5) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day5) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day5) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day5) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day5) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day5) ? 'Marked' : 'Not Marked',
          },
          [day6]: {
            dateWithBreath: activityDWBr?.includes(day6) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day6) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day6) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day6) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day6) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day6) ? 'Marked' : 'Not Marked',
          },
          [day7]: {
            dateWithBreath: activityDWBr?.includes(day7) ? 'Marked' : 'Not Marked',
            dateWithBody: activityDWB?.includes(day7) ? 'Marked' : 'Not Marked',
            dateWithFood: activityDWF?.includes(day7) ? 'Marked' : 'Not Marked',
            hourlyBreaths: activityHBr?.includes(day7) ? 'Marked' : 'Not Marked',
            countBlessings: activityCB?.includes(day7) ? 'Marked' : 'Not Marked',
            toughThings: activityTT?.includes(day7) ? 'Marked' : 'Not Marked',
          }
        }
    
        return currentUser;
      });

    // table columns
    const weeklyUserActivitiesTableCols = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        width: '250px',
        onFilter: (value, record) => record.name === value,
        filterSearch: true,
    },
    {
        title: day7,
        dataIndex: day7,
        key: day7,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day6,
        dataIndex: day6,
        key: day6,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day5,
        dataIndex: day5,
        key: day5,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day4,
        dataIndex: day4,
        key: day4,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day3,
        dataIndex: day3,
        key: day3,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day2,
        dataIndex: day2,
        key: day2,
        width: '300px',
        render: (record) => {
            return (
            <div className='all-activities-wrapper'>
                {
                    userActivities?.map((userActivity, index) => {
                        return (
                            <div className="current-activity" key={index}>
                                <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                                <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                    {record?.[Object.values(userActivity)[0]].toUpperCase()}
                                </Tag>
                            </div>
                        )
                    })
                }
            </div>
            )
        }
    },
    {
        title: day1,
        dataIndex: day1,
        key: day1,
        width: '300px',
        render: (record) => {
        return (
            <div className='all-activities-wrapper'>
            {
                userActivities?.map((userActivity, index) => {
                    return (
                        <div className="current-activity" key={index}>
                            <Paragraph style={{ marginBottom: 0 }}>{Object.keys(userActivity)[0]}</Paragraph>
                            <Tag color={record?.[Object.values(userActivity)[0]] === 'Marked'? 'green' :'red'}>
                                {record?.[Object.values(userActivity)[0]].toUpperCase()}
                            </Tag>
                        </div>
                    )
                })
            }
            </div>
        )
        }
    },
    
    ];

    weeklyUserActivitiesTableCols[0] = {
        ...weeklyUserActivitiesTableCols[0],
        filters: usersDataSource?.map(user => {
            return {
                text: user.name,
                value: user.name,
            }
        })
    }

    // weekly activities count
    const userActivitiesCountData = usersDataSource?.map(user => {
        let dateWithBreathCount = 0;
        let dateWithBodyCount = 0;
        let dateWithFoodCount = 0;
        let hourlyBreathsCount = 0;
        let countBlessingsCount = 0;
        let toughThingsCount = 0;

        for(let key in user) {
            if(typeof user[key] === 'object') {
                let value = user[key];
                for (let key1 in value) {
                    if(key1 === 'dateWithBreath' && value[key1] === 'Marked') {
                        dateWithBreathCount += 1;
                    }
                    if(key1 === 'dateWithBody' && value[key1] === 'Marked') {
                        dateWithBodyCount += 1;
                    }
                    if(key1 === 'dateWithFood' && value[key1] === 'Marked') {
                        dateWithFoodCount += 1;
                    }
                    if(key1 === 'hourlyBreaths' && value[key1] === 'Marked') {
                        hourlyBreathsCount += 1;
                    }
                    if(key1 === 'countBlessings' && value[key1] === 'Marked') {
                        countBlessingsCount += 1;
                    }
                    if(key1 === 'toughThings' && value[key1] === 'Marked') {
                        toughThingsCount += 1;
                    }
                }
            }
        }

        const totalCount = dateWithBreathCount + dateWithBodyCount + dateWithFoodCount + hourlyBreathsCount + countBlessingsCount + toughThingsCount;
        const percentage = Math.round((totalCount / 42) * 100);

        return {
            key: user.name,
            name: user.name,
            dateWithBreath: dateWithBreathCount,
            dateWithBody: dateWithBodyCount,
            dateWithFood: dateWithFoodCount,
            hourlyBreaths: hourlyBreathsCount,
            countBlessings: countBlessingsCount,
            toughThings: toughThingsCount,
            totalCount,
            percentage
        }
    });

    const userActivitiesCountTableCols = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            sorter: (a, b) => a.name.localeCompare(b.name),
            onFilter: (value, record) => record.name === value,
            filterSearch: true,
        },
        {
            title: 'Date with breaths',
            dataIndex: 'dateWithBreath',
            key: 'dateWithBreath',
        
        },
        {
            title: 'Date with body',
            dataIndex: 'dateWithBody',
            key: 'dateWithBody',
        },
        {
            title: 'Date with food',
            dataIndex: 'dateWithFood',
            key: 'dateWithFood',
        },
        {
            title: 'Hourly breaths',
            dataIndex: 'hourlyBreaths',
            key: 'hourlyBreaths',
        },
        {
            title: 'Count blessings',
            dataIndex: 'countBlessings',
            key: 'countBlessings',
        },
        {
            title: 'Tough things',
            dataIndex: 'toughThings',
            key: 'toughThings',
        },
        {
            title: 'Total count',
            dataIndex: 'totalCount',
            key: 'totalCount',
        },
        {
            title: 'Percentage',
            dataIndex: 'percentage',
            key: 'percentage',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.percentage - b.percentage,
            render: (text, record) => {
                return (
                    <Progress type="circle" percent={record.percentage} width={40} />
                )
            }
        },
    ]

    userActivitiesCountTableCols[0] = {
        ...userActivitiesCountTableCols[0],
        filters: usersDataSource?.map(user => {
            return {
                text: user.name,
                value: user.name,
            }
        })
    }

    // function to download data as excel file
    function downloadAsExcel() {
        const cloneDataSource = [ ...userActivitiesCountData ]?.map(user => {
            const cloneUser = { ...user };
            delete cloneUser.key;

            return cloneUser;
        });

        const worksheet = XLSX.utils.json_to_sheet(cloneDataSource);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, `Past 7 days count`);
        XLSX.writeFile(workbook, "Weekly User Activities.xlsx");
    }

  return (
    <>
        <Title level={4}>Weekly user activities</Title>
        <Table className='weekly-user-activities' dataSource={usersDataSource} columns={weeklyUserActivitiesTableCols} 
        pagination={{ defaultPageSize: 5 }}
        scroll={{
        x: 1300,
        }} bordered />

        <Title level={4}>{ `Past 7 days count (${day7} - ${day1})`  }</Title>
        <div className='icon-wrapper'>
            <Tooltip placement="bottomRight" title={'Download as excel'}>
              <PiMicrosoftExcelLogoFill size={'2rem'} onClick={downloadAsExcel} />
            </Tooltip>
        </div>
        <Table dataSource={userActivitiesCountData} columns={userActivitiesCountTableCols} 
        pagination={{ defaultPageSize: 5 }}
        scroll={{
        x: 1300,
        }} bordered />
    </>
  )
}

export default WeeklyUserActivities