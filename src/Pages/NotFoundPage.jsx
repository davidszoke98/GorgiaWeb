import React from 'react'
import Logo from '../Components/logo';

export default function NotFoundPage() {
    return (
        <div style={{height:'100vh',width:'100vw',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',flex:1,textAlign:'center'}}>
                    <Logo>
                        <img height='80%' src={require('../Assets/georgialogo.png')}></img>
                    </Logo>
                    <h1 style={{margin:0,fontSize:60}}>404</h1>
                    <h1 style={{margin:0}}>The page you are looking for is not available</h1>
                </div>
        </div>
    )
}
