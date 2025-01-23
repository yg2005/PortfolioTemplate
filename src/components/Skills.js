
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import BMC from "../assets/img/BMC.png";
import JPMC from "../assets/img/JPMC.png";
import Acc from "../assets/img/Acc.png";
import Excel from "../assets/img/Excel.png";
import UBS from "../assets/img/UBS.png";
import GenAI from "../assets/img/GenAI.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Certifications</h2>
                        <p>Exploring the intersection of Computer Science and Finance to create innovative solutions.<br></br> Specializing in Web Development, Quantitative Analysis, and Machine Learning.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a href={BMC} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={BMC} alt="Bloomberg Market Concepts" />
                                </a>
                                <a href="https://portal.bloombergforeducation.com/certificates/KXR6uNf7cqTo7MZU26yZ3Pb6" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">Bloomberg Market Concepts</h5>
                                </a>
                            </div>
                            <div className="item">
                                <a href={JPMC} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={JPMC} alt="J.P. Morgan Chase" />
                                </a>
                                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/bWqaecPDbYAwSDqJy_JPMorgan%20Chase%20&%20Co._EbY757uKuCuHpdPFD_1724101080173_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">J.P. Morgan Quant Research</h5>
                                </a>
                            </div>
                            <div className="item">
                                <a href={Acc} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={Acc} alt="Accenture" />
                                </a>
                                <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/XvvYRvb2YpfkyA52H_T6kdcdKSTfg2aotxT_EbY757uKuCuHpdPFD_1730830361158_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">Accenture Software Development</h5>
                                </a>
                            </div>
                            <div className="item">
                                <a href={Excel} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={Excel} alt="Excel" />
                                </a>
                                <a href="https://www.linkedin.com/learning/certificates/2a63fbb7df39390f9189fedd6ec10e556cfc491d60fc3e6c5de86d3732b8b6c0?u=76115650" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">Excel Essential Training</h5>
                                </a>
                            </div>
                            <div className="item">
                                <a href={UBS} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={UBS} alt="UBS" />
                                </a>
                                <a href="https://my.amplifyme.com/certificate/d8df8345-8cfe-4789-b715-cc24c0c0ccea" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">Morgan Stanley & UBS</h5>
                                </a>
                            </div>
                            <div className="item">
                                <a href={GenAI} target="_blank" rel="noopener noreferrer">
                                    <img className="cert-image" src={GenAI} alt="Generative AI" />
                                </a>
                                <a href="https://credentials.databricks.com/cdf1e819-31fb-45fd-afcb-f16bb20afc69#acc.vIU9tGWN" target="_blank" rel="noopener noreferrer">
                                    <h5 className="cert-text">Generative AI</h5>
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
