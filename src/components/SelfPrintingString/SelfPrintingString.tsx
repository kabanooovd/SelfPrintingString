import React, {useState} from "react";

type SelfPrintingStringT = {
    word: string
    seconds: number
}
export const SelfPrintingString: React.ComponentType<SelfPrintingStringT> = props => {

    let {word, seconds} = props

    const [str, setStr] = useState<string>('')

    const rStr = () => {
        const printing = setTimeout(() => {

            if (str.length === 0) {
                setStr(str + word[0])
            }

            str.length >= 1 && str.length <= word.length - 1 && setStr(str + word[str.length])

            if (str.length === word.length) {
                clearTimeout(printing)
                setTimeout( () => setStr(''), 2000 )
            }

        }, seconds * 1000)

    }



    rStr()
    // window.requestAnimationFrame(rStr)

    return (
        <div>
            <span>{str.length === word.length ? str : str + '|'}</span>
            <div>
                <button onClick={() => console.log('lalala')}>click</button>
            </div>
        </div>
    )

}


