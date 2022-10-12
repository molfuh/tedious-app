import React from 'react';
import { useState } from 'react'
// import TediousBgImg from './TediousBgImg.jpg';
import Tilt from 'react-tilt';

export default function Tedious() {
  return (
    <>
    <div className="divWrapper">
      <div className="tedious_bg">
          {/* <Tilt className="background-circle-wrapper" options={{ max : 15, reset: true }}> */}
          <span className="background-circle-wrapper">
            <span className="background-circle">
              <span className="T-Top" />
              <span className="T-Side" />
              <span>
                <span className="HorizontalLines T-Top"></span>
                <span className="HorizontalLines T-Top"></span>
                <span className="HorizontalLines T-Top"></span>
                <span className="HorizontalLines T-Top"></span>
                <span className="HorizontalLines T-Top"></span>
              </span>
              <span className="LettersStyleWrapper">
                <span className="E LettersStyle">E</span>
                <span className="D LettersStyle">D</span>
                <span className="I LettersStyle">I</span>
                <span className="O LettersStyle">O</span>
                <span className="U LettersStyle">U</span>
                <span className="S LettersStyle">S</span>
              </span>
              <span className="live_ted_text">
                live tediously
              </span>
            </span>
          </span>
          {/* </Tilt> */}
          <iframe className="live_music_soundcloud" title="tedious_song" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/950548042&color=%23c8afb2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          <div Style={{fontSize: '10px', color: '#c8afb2',lineBreak: 'anywhere',wordBreak: 'normal',overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',fontWeight: '100'}}>
            {/* <a href="https://soundcloud.com/user-374679796" title="Erik Genaff" target="_blank" rel="noreferrer" Style={{color: '#c8afb2', textDecoration: 'none'}}>Erik Genaff</a> ·
            <a href="https://soundcloud.com/user-374679796/how-did-you-know-i-wanted-to-1" title="How Did You Know? (i wanted to say i love you)" target="_blank" rel="noreferrer" Style={{color: '#c8afb2', textDecoration: 'none'}}>How Did You Know? (i wanted to say i love you)</a> */}
            </div>
        </div>
      </div>
    </>
  )
}