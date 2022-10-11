import React from 'react';
import { useState } from 'react'
import TediousBgImg from './TediousBgImg.jpg';

export default function Tedious() {
  return (
    <>
      <div className="divWrapper">
        <div className="tedious_bg">
          <span className="background-circle-wrapper">
            <span className="background-circle">
              <span className="T-Top" />
              <span className="T-Side" />
              <span>
                <span className="VerticalLines T-Top"></span>
                <span className="VerticalLines T-Top"></span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  )
}