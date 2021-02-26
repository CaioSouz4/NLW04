import React, { ReactElement } from 'react'
import styles from '../styles/components/profile.module.css'
interface Props {
    
}

export default function Profile(): ReactElement {
    return (
        <div className={styles.profileContainer}>
            <img src='https://github.com/CaioSouz4.png' alt='profileimg'></img> 
            <div>
                <strong>Caio</strong>
                <p>
                    <img src='icons/level.svg' alt=""></img>
                    level 1
                </p>
            </div>
        </div>
    )
}
