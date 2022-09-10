import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Something about this app" text="textytext text" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Join your team</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Features" text="more text" />
      <Feature title="Features" text="more text" />

    </div>
  </div>
);

export default WhatGPT3;
