import './FooterComponent.css';
import { Col, Row, Progress, Button } from 'antd';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterComponent = () => {
    return (
        <>
            <Footer className="footer">
                <hr />
                <Row className="footer-row">
                    <Col span={12} lg={12}xs={24}className="patient-available">
                        <p>Available patient profiles: <strong>3 of 5</strong></p>
                        <div className="available-patient">
                            <Progress percent="50" showInfo={false} strokeColor="#27b778" />
                        </div>
                    </Col>
                    <Col span={12} lg={12}xs={24}className="upgrade">
                        <div className="upgrade-button">
                            <Button>Upgrade</Button>
                        </div>
                    </Col>
                </Row>
            </Footer>

        </>
    )
}