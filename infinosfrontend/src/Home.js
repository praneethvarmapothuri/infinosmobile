import "./Devices.css"
import logo from "./images/logo_black.svg"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import home_icon from "./images/home_page.png"

function Home(){
    const navigate = useNavigate() ;
    return(
        <div className="main-header">
            <img className="logo" src={logo} onClick={()=>{
                navigate("/") ;
            }}></img>
            <Button onClick={()=>{
                navigate("/devices") ;
            }} className= "Addbtn" sx={{fontSize:"10px"}} variant="contained" label="Button" labelStyle={{ fontSize: '12px'}}>List of Devices</Button>
            <img src={home_icon} style={{width:"350px",height:"380px",marginTop:"100px",marginLeft:"25px",border:"1px solid black"}}></img>
        </div>

    )
}
export default Home