import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import _, { attempt } from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({ ...state, guess })
        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('yeah! you won!')
                console.log('total attempt = %d', state.attempt)
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('reset try again')
                console.log('attempt = %d', state.attempt)
                if(state.attempt == 5) {
                    console.log('hint : when you meet your friend, you say .....')
                }
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
                if(state.attempt == 10) {
                    console.log('You lose, answer is %s', state.word)
                    setState({ ...state, attempt: state.attempt})
                }
            }
        }
    }

    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} />)
            }
        </div>
    )
}