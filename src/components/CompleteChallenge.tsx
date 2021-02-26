import React, { ReactElement } from 'react';
import styles from '../styles/components/completeChallenge.module.css';

interface Props {
    
}

export default function CompleteChallenge(): ReactElement {
    return (
        <div className={styles.completeChallengeContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}
