import React from 'react';
import { useState } from 'react'
import TediousBgImg from './TediousBgImg.jpg';

export default function Tedious() {
  return (
    <>
      <div className="divWrapper">
        <div className="tedious_bg">
        {/* <img src={TediousBgImg} className="tedious_bg" alt="background colors"> */}
          <span className="background-circle-wrapper">
            <span className="background-circle">
            </span>
          </span>
          <span className="T-Top" />
          <span className="T-Side" />
        </div>
        {/* </img> */}
      </div>
    </>
  )
}