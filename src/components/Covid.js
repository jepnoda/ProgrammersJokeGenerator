import React, { useState } from 'react'
import { useFetch } from 'use-http'
import Body from './Covid/Body'
import Title from './Covid/Title'

const Covid = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '701f881442mshbcf09582b2e6584p1effd1jsnc31ec90ef847',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    }
    const { loading, error, data = [] } = useFetch('https://covid-193.p.rapidapi.com/statistics?country=Philippines', options, [])
    if (error) {
        console.log(error)
    }

    return (
        <>
            {
                loading ? <h1 className='font-poppins text-slate-700 font-bold text-xl tracking-wide text-center'>Loading...</h1> :
                    <div className='py-4 px-12 bg-slate-50/30 backdrop-blur-sm backdrop-opacity-10 w-fit rounded-lg'>
                        <Title Title={data.response[0].country} />
                        <Body Text={data.response[0].day} />
                        <Title Title="Total Cases" />
                        <Body Text={data.response[0].cases.total} />
                        <Title Title="Total Deaths" />
                        <Body Text={data.response[0].deaths.total} />
                    </div>
            }
        </>
    )
}

export default Covid