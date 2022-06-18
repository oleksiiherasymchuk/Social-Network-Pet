import React from 'react'
import styles from './Settings.module.css'

import 'antd/dist/antd.css'
import { SlidersOutlined } from '@ant-design/icons';


const Settings = () => {
  return (
    <div>
      <div>
        <span className={styles.settingsH}>
          <h1>Settings</h1>
          <SlidersOutlined className={styles.settingsIcon} />
        </span>
      </div>
      <div>
        <h2>No settings yet...</h2>
      </div>

    </div>
  )
}

export default Settings