import React,{useEffect,useState} from 'react'
import Button from '../Components/Button';
import Logo from '../Components/logo.jsx'
export default function HomePage() {
    
    const [selection,setSelection]= useState(1);

    useEffect(()=>{
        setSelection(2);
    },[])

    return (
        <div style={{height:'80vh',width:'calc(100vw)',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                <Logo>
                    <img src={require('../Assets/georgialogo.png')}></img>
                </Logo>
                <div style={{display:"flex",width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Button onClick={()=>{window.location.href="/login"}} background="#E1E2E1">
                        <h1>Return Book</h1>
                    </Button>
                    <Button onClick={()=>{window.location.href="/login"}} background="#67C2E8">
                        <h1 style={{color:'white'}}>Borrow book</h1>
                    </Button>
                </div>
        </div>
    )
}
