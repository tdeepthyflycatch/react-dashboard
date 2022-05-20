import { Progress } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

export const CardComponent = ({ data }) => {
    return (
        <div className="card">
            <div className='header-icon'>
                <span>{data.time}</span>
                <EllipsisOutlined key="ellipsis" />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
                <img src={data.img} alt="Avatar" style={{ width: "80%", height: "80%" }} />
            </div>
            <div className="container">
                <div className='name-container'>{data.firstName}</div>
                <div className='last-name-container'>{data.lastName}</div>
                <p style={{ color: data.color }}>{data.status}</p>
                <Progress percent={data.storage} showInfo={false} strokeColor={data.strokeColor} />
                <p style={{ display: "flex" }}>Storage <span>:</span><span>{data.storage}</span>%</p>
            </div>
        </div>
    )
}