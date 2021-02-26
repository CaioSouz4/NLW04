import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/components/countdown.module.css'

interface Props {
    
}

let countdownTimeout: NodeJS.Timeout

export default function Countdown(): ReactElement {

    const [time, setTime] = useState(0.3 * 60);  
    const [active, setActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRigth] = String(seconds).padStart(2, '0').split('');
 
    function startCountdown () {
        setActive(true);
    }

    function resetCountdown () {
        clearTimeout(countdownTimeout)
        setActive(false);
        setTime(25 * 60)
    }

    useEffect(() => {
        if(active != false && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (active) {
            sethasFinished(true)
            setActive(false)
        }
    }, [active, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span> {minuteLeft} </span>
                    <span> {minuteRigth} </span>
                </div>      
                <span> : </span> 
                <div>
                    <span> {secondLeft} </span>
                    <span> {secondRigth} </span>
                </div> 
            </div>

            { hasFinished ? (
                <button
                    type="button"
                    disabled 
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ): (
                null
            )}

            {active ? (
                
                <button 
                    type="button" 
                    className={`${styles.countButton} ${styles.countButtonActive}`}
                    onClick={resetCountdown}>
                    Abandonar ciclo
                </button>

            ) : (

                <button 
                    type="button" 
                    className={styles.countButton}
                    onClick={startCountdown}>
                    Iniciar um ciclo
                </button> 

            )}
             
            
        </div>
    )
}
