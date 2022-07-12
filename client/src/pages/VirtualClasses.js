import React from 'react';

import virtualOne from '../images/virtual_classes_page/vistural_class_1.png';
import virtualTwo from '../images/virtual_classes_page/vistural_class_2.png';
import virtualThree from '../images/virtual_classes_page/vistural_class_3.png';


const VirtualClass = () => {
  return(
    <div className='flex-row'>
      <div className='col-sm-12 col-md-4'>
        <img src={virtualOne} alt='online course option 1' height={300} width={300} />
      </div>
      <div className='col-sm-12 col-md-4'>
        <img src={virtualTwo} alt='online course option 2' height={300} width={300} />
      </div>
      <div className='col-sm-12 col-md-4'>
        <img src={virtualThree} alt='online course option 3' height={300} width={300} />
      </div>
    </div>
  );
};

export default VirtualClass;