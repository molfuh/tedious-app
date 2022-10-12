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
              </span>
              <span className="LettersStyleWrapper">
                <span className="E LettersStyle">E</span>
                <span className="D LettersStyle">D</span>
                <span className="I LettersStyle">I</span>
                <span className="O LettersStyle">O</span>
                <span className="U LettersStyle">U</span>
                <span className="S LettersStyle">S</span>
              </span>
            </span>
          </span>
          {/* </Tilt> */}
        </div>
      </div>
    </>
  )
}