import React, { Component } from 'react'
import { Timeline, Icon } from 'antd';

class SettingTimeline extends Component {
    render() {
        return (
            <div className="flex-container-column" style={{width: '100%'}}>
                <h1 style={{alignSelf: 'flex-start'}} >Project Status</h1>
                <Timeline style={{width: '100%'}}>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        )
    }
}

export default SettingTimeline;