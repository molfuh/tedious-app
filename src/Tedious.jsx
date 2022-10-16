import React from 'react';
import { useState } from 'react'
// import TediousBgImg from './TediousBgImg.jpg';
import Tilt from 'react-tilt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Draggable from 'react-draggable';
import {ReactComponent as TikTokIcon } from './tiktok.svg';

export default function Tedious() {
  return (
    <>
    <div className="divWrapper">
      <div className="tedious_bg">
            <span className="found_me">
              you found me! :D
            </span>
         <div className="socialMediaIconsWrapper">
          <a href="https://www.youtube.com/channel/UC7SRMEAzVHVG5gHimUlEHDg" target="_blank" rel="noreferrer">
            <YouTubeIcon className="socialMediaIcons"></YouTubeIcon>
            </a>
          <a href="https://www.tiktok.com/@itstediousmusic?lang=en" target="_blank" rel="noreferrer">
            <TikTokIcon className="socialMediaIcons"></TikTokIcon>
            </a>
            <a href="https://www.instagram.com/itstediousmusic/" target="_blank" rel="noreferrer">
            <InstagramIcon className="socialMediaIcons"></InstagramIcon>
            </a>
            {/* <span className="social_media_icons instagram">{FacebookIcon}</span> */}
         </div>
        <Draggable>
          {/* <Tilt className="background-circle-wrapper" style={{maxWidth: 'fit-content'}} options={{ max : 10, reset: true }}> */}
          <span className="background-circle-wrapper">
            {/* <span className="loading">
              loading: good vibes....
            </span> */}
            {/* <span className="ted_bg_image"></span> */}
            <span className="background-circle">
                <span className="T-Side" />
                <span className="T-Top" />
              {/* <div style={{    marginTop: '10%' }}> */}
                <span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                  <span className="HorizontalLines"></span>
                </span>
                {/* <div> */}
                  <span className="LettersStyleWrapper">
                    <span className="E LettersStyle">E</span>
                    <span className="D LettersStyle">D</span>
                    <span className="I LettersStyle">I</span>
                    <span className="O LettersStyle">O</span>
                    <span className="U LettersStyle">U</span>
                    <span className="S LettersStyle">S</span>
                  </span>
                {/* </div> */}
              {/* </div> */}
              <span className="live_ted_text">
                live tediously
              </span>
            </span>
          {/* </Tilt> */}
          </span>
        </Draggable>
          {/* <iframe className="out_soon" title="tedious_song" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/950548042&color=%23c8afb2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div Style={{fontSize: '10px', color: '#c8afb2',lineBreak: 'anywhere',wordBreak: 'normal',overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',fontWeight: '100'}}> */}
            {/* <a href="https://soundcloud.com/user-374679796" title="Erik Genaff" target="_blank" rel="noreferrer" Style={{color: '#c8afb2', textDecoration: 'none'}}>Erik Genaff</a> ·
            <a href="https://soundcloud.com/user-374679796/how-did-you-know-i-wanted-to-1" title="How Did You Know? (i wanted to say i love you)" target="_blank" rel="noreferrer" Style={{color: '#c8afb2', textDecoration: 'none'}}>How Did You Know? (i wanted to say i love you)</a> */}
            {/* </div> */}
            <div className="out_soon">"it's okay to be not okay" - out soon!</div>
        </div>
      </div>
    </>
  )
}