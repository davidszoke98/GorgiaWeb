import React,{useEffect,useState} from 'react'
import Logo from '../Components/logo.jsx'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import BookReturnService from '../Network/BookReturnService';
export default function ReturnPage() {
    const [id,setId]=useState('4');
    const [active,setActive]=useState('number');
    var [isCorrect, setCorrect] = useState(true)

    const confirm=()=>{
        console.log('id',id);
        BookReturnService.returnBook({bookCatalogId: id}).then(x=>{
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
                setId(id.slice(0,id.length-1))
            }
            return;
        }
        if(value==="cl"){
            if(active==='number'){
                setId("")
            }
            return;
        }
        if(active==='number'){
            setId(id+value)
        }
    }

      
    return (
        <div style={{height:'80vh',width:'calc(100vw)',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                <Logo>
                    <img src={require('../Assets/georgialogo.png')}></img>
                </Logo>
                {isCorrect ? null : <h3 style={{color: 'red', position: 'absolute', marginTop:'-10vh'}}>Incorrect book ID</h3>}
                <h3>Enter book ID to return:</h3>
                <input type="text" autocomplete="autocomplete_off_hack_xfr4!k" onKeyDown={(e) => e.preventDefault()} onFocus={()=>{setActive('number')}} style={{paddingLeft:5,paddingRight:5,borderRadius:5,border:active==='number'?'1.5px solid #67C2E8':'1px solid #999999',fontSize:24,width:300,}} name="number" onChange={(e)=>{setId(e.target.value)}} value={id}>
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
