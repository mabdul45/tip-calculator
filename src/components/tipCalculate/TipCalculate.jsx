import styles from './tipCalculate.module.css'
import iconPerson from '../../images/icon-person.svg'
import iconDollar from '../../images/icon-dollar.svg'
import { useState } from 'react'

const TipCalculate = (props) => {
    const [bill, setBill] = useState(0)
    const [customInput, setCustomInput] = useState('Custom')
    const [person, setperson] = useState(0)
    const [selectPersonError, setSelectPersonError] = useState()

    const tips = ['5', '10', '15', '25', '50']

    const handleTipSelected = (e) => {
        console.log(e ? e.target.value : customInput, customInput)

        const tipSelected = e ? e.target.value : customInput
        if (!person) {
            setSelectPersonError('Can\'t be zero')
            return
        }
        setSelectPersonError('')
        if (bill && person) {
            calculateTip(tipSelected, person)
            setperson(0)
            setBill(0)
            setCustomInput(0)
            console.log(tipSelected, person)
        }

    }

    const handleCustomInput = (e) => {

        const customInput = e.target.value
        setCustomInput(customInput)
        setTimeout(() => handleTipSelected(), 3000)
        // handleTipSelected(customInput)
        console.log(e.target.value)

    }

    // const customInputed = () => {
    //     handleCustomInput()
    // }

    const handlePersonSelected = (e) => {
        setperson(e.target.value)
        // if (bill !== 0) {
        //     hadTip(null, person)
        // }
    }

    const handleBill = (e) => {
        const bill = e.target.value
        setBill(bill)
        console.log(bill)
    }

    const calculateTip = (tipSelected, person) => {
        const tip = bill / tipSelected
        const tipPerPerson = tip / person
        console.log(tipPerPerson)
        props.output(tipPerPerson, tip)
    }
    return (
        <section className={styles.tipCalculate}>
            <div>
                <p>Bill</p>
                <div className={styles.input}>
                    <img src={iconDollar} alt="" />
                    <input type="number" value={bill} onChange={handleBill} />
                </div>
            </div>
            <div className={styles.tip}>
                <p>Select tip %</p>
                <div>
                    {tips.map((tip) => {

                        return (
                            <>
                                <button
                                    key={tip}
                                    onClick={handleTipSelected}
                                    value={tip}
                                >{tip}%</button>
                            </>
                        )
                    })}

                    <input onBlur={handleCustomInput} className={styles.customInput} placeholder='Custom' value={customInput} onChange={handleCustomInput} type='number' />

                </div>
            </div>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p>Number of people</p>{selectPersonError ? <p style={{
                        color: 'red'
                    }}>{selectPersonError}</p> : null}
                </div>
                <div className={styles.input}>
                    <img src={iconPerson} alt="person icon" />
                    <input type="number" value={person} onChange={handlePersonSelected} />
                </div>
            </div>
        </section>
    )
}

export default TipCalculate