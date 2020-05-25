import React,{useEffect,useState} from 'react'
import Logo from '../Components/logo.jsx'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import AuthService from '../Network/AuthService';
import aes from "crypto-js/aes";
import moment from 'moment';

export default function LoginPage() {
    //librarian
    // const [number,setNumber]=useState('1045946125');
    // const [pass,setPass]=useState('011-53-8195'); 
    const [number,setNumber]=useState('1808431305');
    const [pass,setPass]=useState('674-26-7227');
    // const [number,setNumber]=useState('1788981456');
    // const [pass,setPass]=useState('651-84-3090');
    const [active,setActive]=useState('number');
    var [isCorrect, setCorrect] = useState(true)

    const confirm=()=>{
        AuthService.login({login:number,password:"Pass"+pass+"word"}).then(x=>{
            window.localStorage.setItem('token',x.authToken);
            var expiration=moment().add(10,'minutes').format('YYYY-MM-DD HH:mm:ss');
            var encExp=aes.encrypt(expiration,process.env.REACT_APP_NOT_SECRET_CODE);
            var encRole=aes.encrypt(x.authRole,process.env.REACT_APP_NOT_SECRET_CODE);
            window.localStorage.setItem("exp",encExp);
            window.localStorage.setItem("role",encRole);
            window.location.reload();            
        }).catch(x=>{
            setCorrect(false)
        })
    }

    const onKeyPress=(value)=>{
        if(value==="bk"){
            if(active==='number'){
                setNumber(number.slice(0,number.length-1))
            }
            else if(active==='pass'){
                setPass(pass.slice(0,pass.length-1)) 
            }
            return;
        }
        if(value==="cl"){
            if(active==='number'){
                setNumber("")
            }
            else if(active==='pass'){
                setPass("") 
            }
            return;
        }
        if(active==='number'){
            setNumber(number+value)
        }
        else if(active==='pass'){
            if(pass.length<11){
                setPass(pass+value);
            }
        }
    }

      
    return (
        <div data-testid="login-container" style={{height:'100vh',width:'calc(100vw)',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',flex:2,width:'100%'}}>
                    <Logo>
                        <img height='80%' src={require('../Assets/georgialogo.png')}></img>
                    </Logo>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',flex:4,width:'100%'}}>
                    <div style={{height:20,width:'100%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h3 style={{color: 'red'}}>{isCorrect ? "": "Incorrect card number or password"}</h3>
                    </div>
                    
                    <h3>Enter your card number:</h3>
                    <input type="text" autoComplete="autocomplete_off_hack_xfr4!k" onKeyDown={(e) => e.preventDefault()} onFocus={()=>{setActive('number')}} style={{paddingLeft:5,paddingRight:5,borderRadius:5,border:active==='number'?'1.5px solid #67C2E8':'1px solid #999999',fontSize:24,width:300,}} name="number" onChange={(e)=>{setNumber(e.target.value)}} value={number}>
                    </input>
                    <h3>Enter your password:</h3>
                    <input type="password" autoComplete="autocomplete_off_hack_xfr4!k" onKeyDown={(e) => e.preventDefault()} maxLength="4" onFocus={()=>{setActive('pass')}} style={{paddingLeft:5,paddingRight:5,borderRadius:5,border:active==='pass'?'1.5px solid #67C2E8':'1px solid #999999',fontSize:24,width:300,}} name="pass" onChange={(e)=>{setPass(e.target.value)}} value={pass}>
                    </input>
                    <div style={{width:300,marginTop:20}}>
                        <Keyboard

                            layout= {{
                                default: ["1 2 3", "4 5 6", "7 8 9", "0 -", "bk cl"]
                            }}
                            display={{
                                "bk": "⌫",
                                "cl":"✖️"
                            }}
                            onChange={()=>{}}
                            onKeyPress={onKeyPress}
                        />
                    </div>
                    <div className="card_button" onClick={confirm} style={{cursor:'pointer',width:300,marginTop:20,fontSize:24,background:'#67C2E8',color:'white',border:'none',borderRadius:5,display:'flex',justifyContent:'center',alignItems:'center'}}>Confirm</div>
                </div>
                <div style={{display:'flex',flex:1,width:'100%'}}>
                </div>
        </div>
    )
}
