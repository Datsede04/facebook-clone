import React from 'react'
import "./Widgets.css"

function Widgits() {
    return (
        <div className='widgets'> 
    
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                height="100%"
                style={{border: "0px",width: "100%" }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
            </iframe>
        </div>

    )
}

export default Widgits
