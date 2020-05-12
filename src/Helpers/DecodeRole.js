import aes from "crypto-js/aes";
import CryptoJS from "crypto-js"

export default function decodeRole(){
    var role=localStorage.getItem('role');
    var decodedRole=aes.decrypt(role,process.env.REACT_APP_NOT_SECRET_CODE).toString(CryptoJS.enc.Utf8);
    return decodedRole;
}