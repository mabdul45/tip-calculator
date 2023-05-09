import { useEffect, useState } from "react"
import TipOutput from "../../components/TipOutput/TipOutput"
import Card from "../../components/card/Card"
import TipCalculate from "../../components/tipCalculate/TipCalculate"

const TipCalculator = () => {

    const [output, setOutput] = useState({})
    // let setState
    // useEffect(
    //     () => {
    //         setState = (tipPerPerson, tip) => {
    //             setOutput(tipPerPerson, tip)
    //         }

    //     }
    //     , [])


    const handleOutput = (tipPerPerson, tip) => {
        setOutput({ tipPerPerson, tip })
    }
    return (
        <>

            <Card>
                <TipCalculate output={handleOutput} /><TipOutput output={output} />
            </Card>

        </>
    )
}

export default TipCalculator