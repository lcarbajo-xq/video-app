import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume (props) {
  return (
    <div className="Volume" onClick={props.handleVolumeClick}>
      <VolumeIcon
        color="white"
        size={25} />
      <input className="Volume-range"
        type="range"
        min={0}
        max={1}
        step={0.05}
        onChange={props.handleVolumeChange}/>
    </div>
  )
}

export default Volume;
