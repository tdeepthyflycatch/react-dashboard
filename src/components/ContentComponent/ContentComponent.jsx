import './ContentComponent.css';
import { Layout, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FooterComponent } from '../FooterComponent/FooterComponent';
import { CardComponent } from '../CardComponent/CardComponent';

const { Content } = Layout;

export const ContentComponent = ({cardDetails}) => {
    return( 
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <h2 className='main-title'>My patient profiles</h2>
          <div className="patient-card">
            <Row>
              {cardDetails.map((data, index) =>
                <Col span={12} lg={12} md={12} sm={6} xs={6}key={`key-${index}`}>
                  <CardComponent data={data} />
                </Col>)}
              <Col span={12} lg={12} md={12} sm={6} xs={6}> <div className="card-add">
                <div style={{ width: "100%", textAlign: "center" }}>
                </div>
                <div className="container">
                  <div className="create-patient">
                    <PlusOutlined />
                  </div>
                  <p className='create-patient-text'>Create new patient profile</p>
                </div>
              </div>
              </Col>
            </Row>
          </div>
         <FooterComponent />
        </Content>
    )
}