import { UserOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic, Typography } from 'antd'
import React from 'react';

const UserStats = ({ usersData = []}) => {
  const { Title } = Typography;

  return (
    <>
        <Title level={4}>User Statistics</Title>
        <Row gutter={16} style={{ marginBottom: '1rem' }}>
            <Col span={4}>
            <Card bordered={false}>
                <Statistic
                title="Total Users"
                value={usersData?.length ?? 0}
                valueStyle={{
                    color: '#0891b2'
                }}
                prefix={<UserOutlined />}
                />
            </Card>
            </Col>
        </Row>
    </>
  )
}

export default UserStats