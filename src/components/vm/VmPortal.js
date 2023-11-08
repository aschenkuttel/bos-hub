// iframe.js

import React, { useState } from 'react'
import { createPortal } from 'react-dom'

export const IFrame = ({
                           children,
                           ...props
                       }) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode =
        contentRef?.contentWindow?.document?.body

    return (
        <iframe className='min-h-screen w-screen' {...props} ref={setContentRef}>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossOrigin="anonymous"/>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}