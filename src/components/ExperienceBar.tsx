import React, { ReactElement } from 'react'
import styles from '../styles/components/experienceBar.module.css'
interface Props {
    
}

export default function ExperienceBar({}: Props): ReactElement {
    return (
      <header className={styles.experienceBar}>
        <span>0</span>
        <div>
            <div style={{width: '60%'}}/>
            <span className={styles.currentExperience} style ={{left: "60%"}} >300</span>
        </div>
        <span>600</span>
      </header>
    )
}
