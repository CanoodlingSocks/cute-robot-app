import React from 'react';
import CHUBBY_Front from '../../assets/CHU-66Y/CHU-66Y_Standard_Front';
import CHUBBY_RSide from '../../assets/CHU-66Y/CHU-66Y_Standard_RSide';
import CHUBBY_LSide from '../../assets/CHU-66Y/CHU-66Y_Standard_LSide';
import CHUBBY_Back from '../../assets/CHU-66Y/CHU-66Y_Standard_Back';

const RobotComponents: Record<string, Record<string, React.FC>> = {
  'CHU-66Y': {
    front: CHUBBY_Front,
    rside: CHUBBY_RSide,
    back: CHUBBY_Back,
    lside: CHUBBY_LSide,
  },
};

export default RobotComponents;
