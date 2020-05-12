import React from 'react'

export default function BookListing(props) {
    return (
        <div className="bookListing" style={{ height: 40, width: 'calc(70%)', backgroundColor: props.even ? '#F1F1F1' : 'rgba(103, 194, 232,0.4)', display: 'flex', flexDirection: 'row', paddingLeft: '15%', paddingRight: '15%', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>{props.item.title}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>{props.item.author}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center' }}>{props.item.releasedDate}</h3>
            </div>
        </div>
    )
}
