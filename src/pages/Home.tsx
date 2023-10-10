import React, { useState,useEffect } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './Home.less';
import LineChart from './data_compoment/LineChart';
import { images } from './imageImport';
import Linechart2 from './data_compoment/LineChart2';
import Piechart from './data_compoment/piechart'
import {piechartdata} from './piechartdata';
import {linechartdata1} from './Linechartdata';
import {linechartdata2} from './Linechartdata';
import {Modal} from 'antd';
import { notification } from 'antd';
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
  const [isModalVisible,setIsModalVisible] = useState(false);
  
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
  const handleImageClick = () => {
    notification.open({
      message: '原神',
      description: '你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相。',
      placement: 'topLeft', // 将通知放置在左侧
    });
  };
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
            <img src={images.image0} onClick = { handleImageClick} />
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
   
    {/* <Modal
       title = "原神"
       open = {isModalVisible}
       onCancel = {() => setIsModalVisible(false)}
       footer = {null}
       width={300}
       className={styles.left_modal}
       style={{ left: 0}}
       >
        <p>你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。
          游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，
          导引元素之力。你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、
          能力独特的同伴们，和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相。
        </p>
    </Modal> */}
    <div className={styles.div_big}>
    <div className={styles.div_small}>
      <div><LineChart data={linechartdata1} /></div>
    </div>
    <div className = {styles.test}><Linechart2 data={linechartdata2} /></div>
    <div className={styles.div_small}> <Piechart data={piechartdata} width={300} height={300} /> </div>
    </div>
    </div>
    </div>
    
  );
};

export default App;


