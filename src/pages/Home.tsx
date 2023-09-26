import React, { useState,useEffect } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './Home.less';
import LineChart from './LineChart';
import { images } from './imageImport'
import Linechart2 from './LineChart2'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('init_data', 'sub1', <MailOutlined />, [
    getItem('image_1', 'image_1'),
    getItem('image_2', 'image_2'),
    getItem('image_3', 'image_3'),
    getItem('image_4', 'image_4'),
  ]),
  getItem('WSIs', 'sub2', <MailOutlined />, [
    getItem('WSIs', 'WSIs'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];
const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleMenuClick = (e: { key: React.Key }) => {
    setSelectedMenuItem(e.key.toString());
  };
  const data = [
    { x: 1, y: 0.6457 },
    { x: 2, y: 0.7643 },
    { x: 3, y: 0.7643 },
    { x: 4, y: 0.7726 },
    { x: 5, y: 0.7726 },
    { x: 6, y: 0.7726 },
    { x: 7, y: 0.7960 },
    { x: 8, y: 0.7960 },
    { x: 9, y: 0.7960 },
    { x: 10, y: 0.7960 },
    { x: 11, y: 0.7960 },
    { x: 12, y: 0.7928 },
    { x: 13, y: 0.7928 },
    { x: 14, y: 0.7928 },
    { x: 15, y: 0.8323 },
    { x: 16, y: 0.8323 },
    { x: 17, y: 0.8323 },
    { x: 18, y: 0.8323 },
    { x: 19, y: 0.8323 },
    { x: 20, y: 0.8354 },
  ];
const data2 = [
  { x: 1, y: 0.8225 },
    { x: 2, y: 0.8356 },
    { x: 3, y: 0.8356 },
    { x: 4, y: 0.8411 },
    { x: 5, y: 0.8411 },
    { x: 6, y: 0.8411 },
    { x: 7, y: 0.8701 },
    { x: 8, y: 0.8701 },
    { x: 9, y: 0.8701 },
    { x: 10, y: 0.8701 },
    { x: 11, y: 0.8701 },
    { x: 12, y: 0.8743 },
    { x: 13, y: 0.8743 },
    { x: 14, y: 0.8743 },
    { x: 15, y: 0.9034 },
    { x: 16, y: 0.9034 },
    { x: 17, y: 0.9034 },
    { x: 18, y: 0.9034 },
    { x: 19, y: 0.9034 },
    { x: 20, y: 0.9171 },
];
  return (
    <div>
      <Menu
         mode="inline"
         openKeys={openKeys}
         onOpenChange={onOpenChange}
         style={{ width: 128 }}
         items={items}
         onClick={(e: { key: React.Key }) => handleMenuClick(e)}
       />
    <div className={styles.container}>
      <div className={styles.imageContainer } style = {{ marginLeft: '270px',marginTop :'2px' }}>
        {selectedMenuItem === 'image_1' && (
          <div className={styles.cgrid}>
            <img src={images.image0_1}  />
            <img src={images.image0_2}  />
            <img src={images.image0_3}  />
            <img src={images.image0_4}  />
            <img src={images.image0_5}  />
            <img src={images.image0_6}  />
            <img src={images.image0_7}  />
            <img src={images.image0_8}  />
            <img src={images.image0_9}  />
            <img src={images.image0_10} />
            <img src={images.image0_11} />
            <img src={images.image0_12} />
            <img src={images.image0_13} />
            <img src={images.image0_14} />
            <img src={images.image0_15} />
            <img src={images.image0_16} />
            <img src={images.image0_17} />
            <img src={images.image0_18} />
            <img src={images.image0_19} />
            <img src={images.image0_20} />
            <img src={images.image0_21} />
            <img src={images.image0_22} />
            <img src={images.image0_23} />
            <img src={images.image0_24} />
            <img src={images.image0_25} /> 
          </div>
        )}
        {selectedMenuItem === 'image_2' && (
          <div className={styles.cgrid}>
            <img src={images.image1_1}  />
            <img src={images.image1_2}  />
            <img src={images.image1_3}  />
            <img src={images.image1_4}  />
            <img src={images.image1_5}  />
            <img src={images.image1_6}  />
            <img src={images.image1_7}  />
            <img src={images.image1_8}  />
            <img src={images.image1_9}  />
            <img src={images.image1_10} />
            <img src={images.image1_11} />
            <img src={images.image1_12} />
            <img src={images.image1_13} />
            <img src={images.image1_14} />
            <img src={images.image1_15} />
            <img src={images.image1_16} />
            <img src={images.image1_17} />
            <img src={images.image1_18} />
            <img src={images.image1_19} />
            <img src={images.image1_20} />
            <img src={images.image1_21} />
            <img src={images.image1_22} />
            <img src={images.image1_23} />
            <img src={images.image1_24} />
            <img src={images.image1_25} />
            
          </div>
        )}
        {selectedMenuItem === 'image_3' && (
          <div className={styles.cgrid} >
            <img src={images.image2_1}  />
            <img src={images.image2_2}  />
            <img src={images.image2_3}  />
            <img src={images.image2_4}  />
            <img src={images.image2_5}  />
            <img src={images.image2_6}  />
            <img src={images.image2_7}  />
            <img src={images.image2_8}  />
            <img src={images.image2_9}  />
            <img src={images.image2_10} />
            <img src={images.image2_11} />
            <img src={images.image2_12} />
            <img src={images.image2_13} />
            <img src={images.image2_14} />
            <img src={images.image2_15} />
            <img src={images.image2_16} />
            <img src={images.image2_17} />
            <img src={images.image2_18} />
            <img src={images.image2_19} />
            <img src={images.image2_20} />
            <img src={images.image2_21} />
            <img src={images.image2_22} />
            <img src={images.image2_23} />
            <img src={images.image2_24} />
            <img src={images.image2_25} /> 
          </div>
        )}
        {selectedMenuItem === 'image_4' && (
          <div className={styles.cgrid}>
            <img src={images.image3_1}  />
            <img src={images.image3_2}  />
            <img src={images.image3_3}  />
            <img src={images.image3_4}  />
            <img src={images.image3_5}  />
            <img src={images.image3_6}  />
            <img src={images.image3_7}  />
            <img src={images.image3_8}  />
            <img src={images.image3_9}  />
            <img src={images.image3_10} />
            <img src={images.image3_11} />
            <img src={images.image3_12} />
            <img src={images.image3_13} />
            <img src={images.image3_14} />
            <img src={images.image3_15} />
            <img src={images.image3_16} />
            <img src={images.image3_17} />
            <img src={images.image3_18} />
            <img src={images.image3_19} />
            <img src={images.image3_20} />
            <img src={images.image3_21} />
            <img src={images.image3_22} />
            <img src={images.image3_23} />
            <img src={images.image3_24} />
            <img src={images.image3_25} />
            
          </div>
        )}
         {selectedMenuItem === 'WSIs' && (
          <div className={styles.cgrid2}>
            <img src={images.image0}  />
            <img src={images.image1}  />
            <img src={images.image2}  />
            <img src={images.image3}  />
            <img src={images.image4}  />
            <img src={images.image5}  />
            <img src={images.image6}  />
            <img src={images.image7}  />
            <img src={images.image8}  />
            <img src={images.image9} />
            <img src={images.image10} />
            <img src={images.image11} />
            <img src={images.image12} />
            <img src={images.image13} />
            <img src={images.image14} />
            <img src={images.image15} />
            <img src={images.image16} />
            <img src={images.image17} />
            <img src={images.image18} />
            <img src={images.image19} />
            <img src={images.image20} />
            <img src={images.image21} />
            <img src={images.image22} />
            <img src={images.image23} />
            <img src={images.image24} /> 
          </div>
        )} 
      </div>
      <div>
      <LineChart data={data} />
      <Linechart2 data = {data2}/>
      </div>
     </div>
    </div>
    
  );
};

export default App;
