import React from 'react'

export default function BookCatalogueListing(props) {
    return (
        <div className="bookListing" style={{ height: 40, width: 'calc(100%)', backgroundColor: props.even ? '#F1F1F1' : 'rgba(103, 194, 232,0.4)', display: 'flex', flexDirection: 'row', paddingLeft: '15%', paddingRight: '15%', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.isbn}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.author}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.title}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.releasedDate}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.copiesNumber}</h3>
            </div>
            <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <h3 style={{ textAlign: 'center',fontSize:18 }}>{props.item.availableBooksNumber}</h3>
            </div>
        </div>
    )
}
