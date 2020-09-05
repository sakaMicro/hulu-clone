import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function header() {
    return (
        <div className="header">
            <div class="header__icons">

              <div classname="header__icon"> 
                 <HomeIcon /> 
                 <p>Home </p>
              </div>

              <div classname="header_icon"> 
                 <LiveTvIcon/>
                 <p>GoLive</p>
              </div>
              
              <div classname="header_icon"> 
                 <VideoLibraryIcon/>
                 <p>collection</p>
               </div>

               <div classname="header_icon"> 
                 <SearchIcon/>
                 <p>Search </p>
              </div>

              <div classname="header_icon"> 
                 <FlashOnIcon/>
                 <p>Trending </p>
              </div>
              
              <div classname="header_icon"> 
                 <PersonOutlineIcon/>
                  <p>Account </p>
              </div>
            
            </div>
            <img src="https://whitelist.tv/wp-content/uploads/2018/03/Hulu.png" alt="supposr"></img>  
        </div>
    );
}
export default header;

