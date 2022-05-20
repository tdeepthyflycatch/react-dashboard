import './SiderComponent.css';
import { Layout, Menu, Card, Button } from 'antd';
import { HomeOutlined, ProfileOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons';
const { Sider } = Layout;

export const SiderComponent = () => {

    const sideBarData = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: <b>Dasboards</b>,
        },
        {
            key: '2',
            icon: <ProfileOutlined />,
            label: <b>Enquiries</b>,
        },
        {
            key: '3',
            icon: <UserOutlined />,
            label: <b>Profiles</b>,
        },
        {
            key: '4',
            icon: <MoneyCollectOutlined />,
            label: <b>Payements</b>,
        },
    ];

    return (
        <Sider className='sider-main-class' breakpoint="lg" collapsedWidth="0">
            <h4 className="capitalize">Patient</h4>
            <Menu defaultSelectedKeys={['1']} items={sideBarData} />
            <div className="contact-us">
                <Card>
                    <strong>Need our help?</strong>
                    <Button type="primary">
                        Contact us
                    </Button>
                </Card>
            </div>
        </Sider>
    )
}