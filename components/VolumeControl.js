/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolume, faVolumeUp, faVolumeDown} from '@fortawesome/pro-solid-svg-icons'
/* Constants */
const VOLUME_STEPS = [0.3, 0.6, 1.0];

const VolumeControl = ({ volume }) => {
  /** State */
  const [volumeStep, setVolumeStep] = useState(2);
  /** Effects */
  useEffect(() => {
    volume(VOLUME_STEPS[volumeStep])
  }, [volumeStep])

  return (
    <button className="player__volume" onClick={() => {
      if(volumeStep !== (VOLUME_STEPS.length - 1)){
        setVolumeStep(volumeStep + 1);
      } else {
        setVolumeStep(0);
      }
    }}>
      <FontAwesomeIcon icon={getVolumeIcon()} size={16} />
    </button>
  );

  function getVolumeIcon(){
    if(volumeStep <= 0){
      return faVolumeDown;
    } else if(volumeStep <= 1){
      return faVolume;
    } else {
      return faVolumeUp
    }
  }
}

export default VolumeControl;
