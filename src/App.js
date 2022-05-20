import './App.css';
import { Layout } from 'antd';
import { baseUrlImage } from './constants'
import { SiderComponent } from './components/SiderComponent/SiderComponent';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { ContentComponent } from './components/ContentComponent/ContentComponent';

const App = () => {

  const cardDetails = [{ firstName: "Jonathan", lastName: "Smith", status: "Active", color: "green", time: "2d ago", storage: 45, img: require(`${baseUrlImage}img1.png`), strokeColor: '#40a9ff' },
  { firstName: "Kate", lastName: "Smith",  status: "Inactive", color: "red", time: "15d ago", storage: 81, img: require(`${baseUrlImage}img2.png`), strokeColor: '#efd533bd' },
  { firstName: "Alexandra ",  lastName: "Smith", status: "Active", color: "green", time: "20d ago", storage: 21, img: require(`${baseUrlImage}img3.png`), strokeColor: '#27b778' }];

  return (
    <Layout className='main-container'>
      <SiderComponent />
      <Layout className="site-layout-content">
        <HeaderComponent />
        <ContentComponent cardDetails={cardDetails} />
      </Layout>
    </Layout>
  );
}

export default App;