import React from 'react'
import './assets/Loading.css'
import { ILoading } from './meta/types'

const Loading = ({
    width,
    height,
    ...style
}: ILoading) => {
    return (
        <div
            className='loading-container'
            style={{ width, height, ...style }}
        >
            <div className='loading'></div>
        </div>
    )
}

export default Loading