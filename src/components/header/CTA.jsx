import React from 'react'
import CV from "../../images/Mostafa_Habib(Frontend Developer).pdf"
function CTA() {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = "Mostafa_Habib(Frontend Developer).pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className='cta'>
        <a onClick={downloadCV} className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
