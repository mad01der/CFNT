import React, { useState,useEffect } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './Home.less';
import * as d3 from 'd3';

import image0_1 from './image_0/1.png';
import image0_2 from './image_0/2.png';
import image0_3 from './image_0/3.png';
import image0_4 from './image_0/4.png';
import image0_5 from './image_0/5.png';
import image0_6 from './image_0/6.png';
import image0_7 from './image_0/7.png';
import image0_8 from './image_0/8.png';
import image0_9 from './image_0/9.png';
import image0_10 from './image_0/10.png';
import image0_11 from './image_0/11.png';
import image0_12 from './image_0/12.png';
import image0_13 from './image_0/13.png';
import image0_14 from './image_0/14.png';
import image0_15 from './image_0/15.png';
import image0_16 from './image_0/16.png';
import image0_17 from './image_0/17.png';
import image0_18 from './image_0/18.png';
import image0_19 from './image_0/19.png';
import image0_20 from './image_0/20.png';
import image0_21 from './image_0/21.png';
import image0_22 from './image_0/22.png';
import image0_23 from './image_0/23.png';
import image0_24 from './image_0/24.png';
import image0_25 from './image_0/25.png';





import image1_1 from './image_1/1.png';
import image1_2 from './image_1/2.png';
import image1_3 from './image_1/3.png';
import image1_4 from './image_1/4.png';
import image1_5 from './image_1/5.png';
import image1_6 from './image_1/6.png';
import image1_7 from './image_1/7.png';
import image1_8 from './image_1/8.png';
import image1_9 from './image_1/9.png';
import image1_10 from './image_1/10.png';
import image1_11 from './image_1/11.png';
import image1_12 from './image_1/12.png';
import image1_13 from './image_1/13.png';
import image1_14 from './image_1/14.png';
import image1_15 from './image_1/15.png';
import image1_16 from './image_1/16.png';
import image1_17 from './image_1/17.png';
import image1_18 from './image_1/18.png';
import image1_19 from './image_1/19.png';
import image1_20 from './image_1/20.png';
import image1_21 from './image_1/21.png';
import image1_22 from './image_1/22.png';
import image1_23 from './image_1/23.png';
import image1_24 from './image_1/24.png';
import image1_25 from './image_1/25.png';




import image2_1 from './image_2/1.png';
import image2_2 from './image_2/2.png';
import image2_3 from './image_2/3.png';
import image2_4 from './image_2/4.png';
import image2_5 from './image_2/5.png';
import image2_6 from './image_2/6.png';
import image2_7 from './image_2/7.png';
import image2_8 from './image_2/8.png';
import image2_9 from './image_2/9.png';
import image2_10 from './image_2/10.png';
import image2_11 from './image_2/11.png';
import image2_12 from './image_2/12.png';
import image2_13 from './image_2/13.png';
import image2_14 from './image_2/14.png';
import image2_15 from './image_2/15.png';
import image2_16 from './image_2/16.png';
import image2_17 from './image_2/17.png';
import image2_18 from './image_2/18.png';
import image2_19 from './image_2/19.png';
import image2_20 from './image_2/20.png';
import image2_21 from './image_2/21.png';
import image2_22 from './image_2/22.png';
import image2_23 from './image_2/23.png';
import image2_24 from './image_2/24.png';
import image2_25 from './image_2/25.png';




import image3_1 from './image_3/1.png';
import image3_2 from './image_3/2.png';
import image3_3 from './image_3/3.png';
import image3_4 from './image_3/4.png';
import image3_5 from './image_3/5.png';
import image3_6 from './image_3/6.png';
import image3_7 from './image_3/7.png';
import image3_8 from './image_3/8.png';
import image3_9 from './image_3/9.png';
import image3_10 from './image_3/10.png';
import image3_11 from './image_3/11.png';
import image3_12 from './image_3/12.png';
import image3_13 from './image_3/13.png';
import image3_14 from './image_3/14.png';
import image3_15 from './image_3/15.png';
import image3_16 from './image_3/16.png';
import image3_17 from './image_3/17.png';
import image3_18 from './image_3/18.png';
import image3_19 from './image_3/19.png';
import image3_20 from './image_3/20.png';
import image3_21 from './image_3/21.png';
import image3_22 from './image_3/22.png';
import image3_23 from './image_3/23.png';
import image3_24 from './image_3/24.png';
import image3_25 from './image_3/25.png';



import image0 from './WSIs/0.png';
import image1 from './WSIs/1.png';
import image2 from './WSIs/2.png';
import image3 from './WSIs/3.png';
import image4 from './WSIs/4.png';
import image5 from './WSIs/5.png';
import image6 from './WSIs/6.png';
import image7 from './WSIs/7.png';
import image8 from './WSIs/8.png';
import image9 from './WSIs/9.png';
import image10 from './WSIs/10.png';
import image11 from './WSIs/11.png';
import image12 from './WSIs/12.png';
import image13 from './WSIs/13.png';
import image14 from './WSIs/14.png';
import image15 from './WSIs/15.png';
import image16  from './WSIs/16.png';
import image17 from './WSIs/17.png';
import image18 from './WSIs/18.png';
import image19 from './WSIs/19.png';
import image20 from './WSIs/20.png';
import image21 from './WSIs/21.png';
import image22 from './WSIs/22.png';
import image23 from './WSIs/23.png';
import image24 from './WSIs/24.png';




const svgWidth = 400; // SVG容器宽度
const svgHeight = 300; // SVG容器高度


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
  type DataItem = {
    x: number;
    y: number;
  };
  useEffect(() => {
    // 数据示例，您需要替换为实际的数据
    const data: DataItem[] = [
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
    
    // 创建SVG容器
    const svg = d3.select('#line-chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

// 定义一些样式
const margin = { top: 30, right: 30, bottom: 50, left: 50 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

const g = svg.append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);
    // 创建比例尺
    const xScale = d3
    .scaleLinear()
    .domain([0, 20])
    .range([0, width]);
  
  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([height, 0]);
  
  // 创建折线生成器
  const line = d3
    .line<DataItem>()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  
  // 添加折线路径
  g.append('path')
    .datum(data)
    .attr('class', 'line')
    .attr('d', line)
    .attr('fill', 'none')
    .attr('stroke', 'green'); // 折线的颜色
  
  // 添加X轴
  g.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale).ticks(5)); // X轴的刻度数量
  
  // 添加Y轴
  g.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(yScale).ticks(5)); // Y轴的刻度数量
  
  // 添加X轴标签
  svg.append('text')
    .attr('class', 'x-axis-label')
    .attr('x', width / 2 + margin.left)
    .attr('y', height + margin.top + 35)
    .text('epoch'); // 替换为您的X轴标签文本
  
  // 添加Y轴标签
  svg.append('text')
    .attr('class', 'y-axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -height / 2 - margin.top)
    .attr('y', margin.left - 30)
    .text('acc'); // 替换为您的Y轴标签文本
  }, []); // 确保在组件加载时运行一次

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
        {/* 根据选中的导航项来显示图片 */}
        {selectedMenuItem === 'image_1' && (
          <div className={styles.cgrid}>
            <img src={image0_1}  />
            <img src={image0_2}  />
            <img src={image0_3}  />
            <img src={image0_4}  />
            <img src={image0_5}  />
            <img src={image0_6}  />
            <img src={image0_7}  />
            <img src={image0_8}  />
            <img src={image0_9}  />
            <img src={image0_10} />
            <img src={image0_11} />
            <img src={image0_12} />
            <img src={image0_13} />
            <img src={image0_14} />
            <img src={image0_15} />
            <img src={image0_16} />
            <img src={image0_17} />
            <img src={image0_18} />
            <img src={image0_19} />
            <img src={image0_20} />
            <img src={image0_21} />
            <img src={image0_22} />
            <img src={image0_23} />
            <img src={image0_24} />
            <img src={image0_25} />
            
          </div>
        )}
        {/* 添加其他导航项对应的图片 */}
        {selectedMenuItem === 'image_2' && (
          <div className={styles.cgrid}>
            <img src={image1_1}  />
            <img src={image1_2}  />
            <img src={image1_3}  />
            <img src={image1_4}  />
            <img src={image1_5}  />
            <img src={image1_6}  />
            <img src={image1_7}  />
            <img src={image1_8}  />
            <img src={image1_9}  />
            <img src={image1_10} />
            <img src={image1_11} />
            <img src={image1_12} />
            <img src={image1_13} />
            <img src={image1_14} />
            <img src={image1_15} />
            <img src={image1_16} />
            <img src={image1_17} />
            <img src={image1_18} />
            <img src={image1_19} />
            <img src={image1_20} />
            <img src={image1_21} />
            <img src={image1_22} />
            <img src={image1_23} />
            <img src={image1_24} />
            <img src={image1_25} />
            
          </div>
        )}

        {selectedMenuItem === 'image_3' && (
          <div className={styles.cgrid} >
            <img src={image2_1}  />
            <img src={image2_2}  />
            <img src={image2_3}  />
            <img src={image2_4}  />
            <img src={image2_5}  />
            <img src={image2_6}  />
            <img src={image2_7}  />
            <img src={image2_8}  />
            <img src={image2_9}  />
            <img src={image2_10} />
            <img src={image2_11} />
            <img src={image2_12} />
            <img src={image2_13} />
            <img src={image2_14} />
            <img src={image2_15} />
            <img src={image2_16} />
            <img src={image2_17} />
            <img src={image2_18} />
            <img src={image2_19} />
            <img src={image2_20} />
            <img src={image2_21} />
            <img src={image2_22} />
            <img src={image2_23} />
            <img src={image2_24} />
            <img src={image2_25} />
            
          </div>
        )}


        {selectedMenuItem === 'image_4' && (
          <div className={styles.cgrid}>
            <img src={image3_1}  />
            <img src={image3_2}  />
            <img src={image3_3}  />
            <img src={image3_4}  />
            <img src={image3_5}  />
            <img src={image3_6}  />
            <img src={image3_7}  />
            <img src={image3_8}  />
            <img src={image3_9}  />
            <img src={image3_10} />
            <img src={image3_11} />
            <img src={image3_12} />
            <img src={image3_13} />
            <img src={image3_14} />
            <img src={image3_15} />
            <img src={image3_16} />
            <img src={image3_17} />
            <img src={image3_18} />
            <img src={image3_19} />
            <img src={image3_20} />
            <img src={image3_21} />
            <img src={image3_22} />
            <img src={image3_23} />
            <img src={image3_24} />
            <img src={image3_25} />
            
          </div>
        )}



         {selectedMenuItem === 'WSIs' && (
          <div className={styles.cgrid2}>
            <img src={image0}  />
            <img src={image1}  />
            <img src={image2}  />
            <img src={image3}  />
            <img src={image4}  />
            <img src={image5}  />
            <img src={image6}  />
            <img src={image7}  />
            <img src={image8}  />
            <img src={image9} />
            <img src={image10} />
            <img src={image11} />
            <img src={image12} />
            <img src={image13} />
            <img src={image14} />
            <img src={image15} />
            <img src={image16} />
            <img src={image17} />
            <img src={image18} />
            <img src={image19} />
            <img src={image20} />
            <img src={image21} />
            <img src={image22} />
            <img src={image23} />
            <img src={image24} />
            
          </div>
        )}

       
      </div>
      <div className={styles.chartContainer}>
          <svg width={svgWidth} height={svgHeight} id="line-chart"></svg>
      </div>
      
     </div>
    </div>
    
  );
};

export default App;
