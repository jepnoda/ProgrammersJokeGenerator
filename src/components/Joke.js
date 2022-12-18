import React, { useState, useEffect } from 'react'
import { useFetch } from 'use-http'
import Text from './Joke/Text'
const Joke = () => {
    const [joke, setJoke] = useState([])
    const [hide, setHide] = useState(true)
    const { get, post, response, loading, error, data } = useFetch('https://v2.jokeapi.dev', {
        path: '/joke/Programming?type=twopart',
        cachePolicy: 'no-cache'
    })
    useEffect(() => {
        loadInitialJoke()
    }, [])
    async function loadInitialJoke() {
        const initialTodos = await get('/joke/Programming?type=twopart')
        if (response.ok) {
            setJoke(initialTodos)
            setHide(false)
        }
    }

    return (
        <>
            {loading ? <h1 className='font-poppins text-slate-700 font-bold text-xl tracking-wide text-center'>Loading...</h1> :
                <div className='grid grid-cols-1 gap-4 mt-3 justify-items-center py-4 px-12 bg-slate-50/30 backdrop-blur-sm backdrop-opacity-10 w-fit rounded-lg'>
                    <button onClick={loadInitialJoke} className='font-poppins text-slate-100 bg-green-600 p-3 rounded-lg'>Generate New Joke</button>
                    <Text Text={joke.setup} />
                    <button onClick={() => setHide(!hide)} className='font-poppins text-slate-100 bg-red-600 p-3 rounded-lg'>Reveal</button>
                    {
                        hide &&
                        <>
                            <Text Text={`${joke.delivery}`} />
                            <Text Text='🤣🤣🤣🤣🤣' />
                        </>
                    }
                </div>
            }


        </>
    )
}

export default Joke