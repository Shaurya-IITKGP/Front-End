import React from 'react'
import { useNavigate } from 'react-router'
const OptionToLogin = () => {
    const navigate=useNavigate();
    return (
        <div style={{color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",gap:"100px"}} >
            <div onClick={()=>{
                navigate("/register/player");
            }}>
                <div style={{height:"200px",width:"200px",border:"1px solid white",borderRadius:"15px"}}>

                </div>
                <p style={{textAlign:"center",fontWeight:"bolder"}}>
                    Player
                </p>
            </div>
            <div onClick={()=>{
                navigate("/signin/college");
            }}>
                <div style={{height:"200px",width:"200px",border:"1px solid white",borderRadius:"15px"}}>

                </div>
                <p style={{textAlign:"center",fontWeight:"bolder"}}>
                    College
                </p>
            </div>
        </div>
    )
}

export default OptionToLogin
