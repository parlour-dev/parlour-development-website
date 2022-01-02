import React from 'react'

const Popup = (props: any) => {
    return (
        <div className='left-0 top-0 right-0 bottom-0 fixed z-50 w-full h-screen bg-gray-900 opacity-90' onClick={props.handleClose}>
            <div className='w-8/12'> 
                 
            </div>
        </div>
    )
}

export default Popup
