import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import SettingTable from './setting_table';
import './settings.css';

const TabPane = Tabs.TabPane;

class Settings extends Component {
  render() {
    return (
      <div className="settings-wrapper">
        <Tabs
          defaultActiveKey="1"
          tabBarStyle={{ display: 'flex', justifyContent: 'center' }}>
          <TabPane tab={<span><Icon type="apple" />Apple Setting</span>} key="1">
            <div className="tab-content">
            <SettingTable/>
            </div>
          </TabPane>
          <TabPane tab={<span><Icon type="android" />Android Setting</span>} key="2">
            <div className="tab-content">
                <h2>setting 2 section</h2>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default Settings;