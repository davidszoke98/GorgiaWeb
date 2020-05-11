import React,{useEffect,useState} from 'react'
import Logo from '../Components/logo.jsx'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import AuthService from '../Network/AuthService';
export default function LoginPage() {
    const [number,setNumber]=useState('1788981456');
    const [pass,setPass]=useState('651-84-3090');
    const [active,setActive]=useState('number');
    var [isCorrect, setCorrect] = useState(true)

    const confirm=()=>{
        console.log('number',number);
        console.log("pass",pass);
        AuthService.login({login:number,password:"Pass"+pass+"word"}).then(x=>{
            console.log(x);
            window.localStorage.setItem('token',x);
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
        <div style={{height:'80vh',width:'calc(100vw)',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                <Logo>
                    <img src={require('../Assets/georgialogo.png')}></img>
                </Logo>
                {isCorrect ? null : <h3 style={{color: 'red', position: 'absolute', marginTop:'-16vh'}}>Incorrect card number or password</h3>}
                <h3>Enter your card number:</h3>
                <input type="text" autocomplete="autocomplete_off_hack_xfr4!k" onKeyDown={(e) => e.preventDefault()} onFocus={()=>{setActive('number')}} style={{paddingLeft:5,paddingRight:5,borderRadius:5,border:active==='number'?'1.5px solid #67C2E8':'1px solid #999999',fontSize:24,width:300,}} name="number" onChange={(e)=>{setNumber(e.target.value)}} value={number}>
                </input>
                <h3>Enter your password:</h3>
                <input type="password" autocomplete="autocomplete_off_hack_xfr4!k" onKeyDown={(e) => e.preventDefault()} maxLength="4" onFocus={()=>{setActive('pass')}} style={{paddingLeft:5,paddingRight:5,borderRadius:5,border:active==='pass'?'1.5px solid #67C2E8':'1px solid #999999',fontSize:24,width:300,}} name="pass" onChange={(e)=>{setPass(e.target.value)}} value={pass}>
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
    )
}
