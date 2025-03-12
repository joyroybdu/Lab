import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download " id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
        <div className="app-download-platform">
          <img src={assets.play_store} alt="playstore" />
          <img src={assets.app_store} alt="appstore" />
        </div>
      </p>
    </div>
  );
};

export default AppDownload;
