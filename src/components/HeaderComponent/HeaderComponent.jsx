import './HeaderComponent.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const HeaderComponent = () => {
    return(
        <div className="search-align">
          <SearchOutlined style={{ fontSize: '20px'}} />
          <span className="search-text"><Input placeholder='Search...'/></span>
        </div>
    )
}