import React from 'react';
import virtualOne from '../images/virtual_classes_page/vistural_class_1.png';
import virtualTwo from '../images/virtual_classes_page/vistural_class_2.png';
import virtualThree from '../images/virtual_classes_page/vistural_class_3.png';


const VirtualClass = () => {
  return(
    <div>
      <img src={virtualOne} alt='online course option 1' height={200} width={200} />
      <img src={virtualTwo} alt='online course option 2' height={200} width={200} />
      <img src={virtualThree} alt='online course option 3' height={200} width={200} />
    </div>
  );
};

export default VirtualClass;