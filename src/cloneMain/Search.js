import React , {useState} from 'react';
import logo from './images/logo1.png';
// import functions from './images/functions.png';
import profileImg from './images/profileImg.png';
import { TbVideoPlus } from "react-icons/tb";
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsMic} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import ".././Design.css"


const Search = ({ onSubmit }) => {
     const [searchTerm, setSearchTerm] = useState("");
     const handleChange = (event) => setSearchTerm(event.target.value);

     const onkeyPress = (event) => {
          if (event.key === "Enter") {
               onSubmit(searchTerm);
          }
     }

     return (
          <>
               <div className="header">
                    <div className='d-flex justify-content-center align-items-center'>
                    <a href='/'><AiOutlineMenu className='menuIcon me-5' /></a>
                    <a href="https://youtube.com" className="brand">
                         <img src={logo} alt="logo" className="logoBrand" />
                    </a>
                    </div>
                    <div className='d-flex'>
                    <input 
                         type="text"
                         fullWidth
                         placeholder="Search.."
                         value={searchTerm}
                         onChange={handleChange}
                         onKeyPress={onkeyPress}
                    />
                   <a href="/" value={searchTerm} className="searchIcon"><AiOutlineSearch className='searchInput' /></a>
                    <a href="/" className='icon1'><BsMic /></a>
                    </div>
                    <div className="">
                         <TbVideoPlus className='icons' />
                         <IoMdNotificationsOutline className='icons' />
                         {/* <img 
                              src={functions} 
                              alt="functions" 
                              className="functions"
                         /> */}
                         <a href="https://www.youtube.com/account" className="profile mb-2">
                              <img src={profileImg} alt="profile" />
                         </a>
                    </div>
               </div>
          </>
     );
};

export default Search;