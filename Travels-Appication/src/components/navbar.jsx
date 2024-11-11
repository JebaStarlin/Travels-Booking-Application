//<<<<<<< Starlin
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import React from "react";

function Navbar(props) {
  const navigate = useNavigate()

   useEffect(()=>{
      // console.log("irvd")
      // console.log(props.token)
      if(props.token != null){
        apiCall()
      }
    },[])
  
    const [anchor, setAnchor] = React.useState(null);
    // const username = "LOGIN"; 

    const handleClick = (event) => {
        if (props.username !== null) {
          console.log(event)
            setAnchor(anchor ? null : event.currentTarget);
        }
    };

    const open = Boolean(anchor);
    const id =0

    const apiCall = async()=>{
      try {
        const response = await fetch("http://localhost:8081/username",{
          method : "POST",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${props.token}`
          }
        })
        if(response.ok){
          const result = await response.json()
          console.log(result.username)
          props.handleUserName(result.username)
        }
        else{
          console.error("Got username not found from api")
        }
      } catch (error) {
        throw new Error(`Error fetching api : ${error}`)
      }
    }

    const toLogin = ()=>{
      navigate("/login")
    }

  return (
    <nav className='flex flex-row justify-between items-center bg-black text-white h-20 px-10'>
        <div className="flex flex-row space-x-4">
            <p><Link to="/">HOME</Link></p>
            <p><Link to="/Display">DISPLAY</Link></p>
            <p><Link to="/Packages">PACKAGES</Link></p>
            <p><Link to="/Booking">BOOKING</Link></p>
            <p><Link to="/Contacts">CONTACTS</Link></p>
        </div>

        <div className="flex flex-row space-x-4">
            <Button aria-describedby={id} type="button" onClick={handleClick}>
              <div> {props.username==null && <p> <Link to="/LOGIN">Login</Link> </p>} </div>
              <div> {props.username!=null && <p> <Link to="/LOGIN">{props.username}</Link> </p>} </div>
                {/* <p> <Link to="/LOGIN">Login</Link> </p> */}
            </Button>
            <BasePopup id={id} open={open} anchor={anchor}>
                <PopupBody>
                    <p><Link to="/Profile">Profile</Link></p>
                    <p><Link to="/Signout">Sign Out</Link></p>
                </PopupBody>
            </BasePopup>
        </div>
    </nav>
  );
}

const grey = {
    700: '#b0b0b0',
    200: '#e0e0e0',
    900: '#303030',
};

const PopupBody = styled('div')(
    ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    box-shadow: ${
        theme.palette.mode === 'dark'
            ? `0px 4px 8px rgb(0 0 0 / 0.7)`
            : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
  `,
);

const Button = styled('button')(
    ({ theme }) => `
    line-height: 1.5;
    background-color: black;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 0 2px 1px ${
        theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px black, inset 0 -2px 1px black;

    &:hover {
        background-color: black;
    }

    &:active {
        background-color: black;
        box-shadow: none;
    }

    &:focus-visible {
        box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
        outline: none;
    }

    &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
        box-shadow: none;
        &:hover {
            background-color: black;
        }
    }
  `,
);

export default Navbar;

