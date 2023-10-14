import { useEffect, useState } from 'react'
import styles from './TipOutput.module.css'


const TipOutput = ({ output }) => {
    const [resetClicked, setResetClicked] = useState(true)

    const handleReset = () => {
        setResetClicked(prev => !prev)
        if (resetClicked) {
            output.tip = output.tipPerPerson = false
            setResetClicked(false)
        }
    }


    return (
        <section className={styles.TipOutput}>
            <div>
                <div>
                    <p>Tip Amount</p>
                    <p>/ person</p>
                </div>
                <p>$ {output.tipPerPerson ? output.tipPerPerson.toFixed(2) : '0.00'}</p>
            </div>
            <div>
                <div>
                    <p>Total</p>
                    <p>/ person</p>
                </div>
                <p>$ {output.tip ? output.tip.toFixed(2) : '0.00'} </p>
            </div>

            <button type="button" onClick={handleReset}>Reset</button>
        </section>
    )
}

export default TipOutput