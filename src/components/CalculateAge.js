import React, { useState } from "react";
import PanelFulldateWise from "./panels/FulldateWise";
import PanelYearWise from "./panels/YearWise";

const CalculateAge = (props) => {
  const [wise, setWise] = useState({
    year: true
  });

  const handlePanel = (e, type) => {
    console.log('handelpanel', type);
    setWise({
      ...wise,
      year: type && type.toLowerCase() === 'year' ? true: false
    });
  }
  return (
    <>
      <section className="panel-wrapper mt-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a 
              className={wise.year ? 'nav-link active' : 'nav-link '} 
              href="#"
              onClick={ 
                (e) => handlePanel(e, 'year') 
              }>Year Wise</a>
          </li>
          
          <li className="nav-item">
            <a 
              href="#" 
              className={!wise.year ? 'nav-link active' : 'nav-link '} 
              onClick={ 
                (e) => handlePanel(e, 'fullYear') 
              }>Fulldate wise</a>
          </li>
        </ul>

          <div className="p-1 mt-2 mb-2
            d-flex align-items-center">
              {wise && wise.year ? 
                <PanelYearWise /> : 
              <PanelFulldateWise />}
          </div>

      </section>
    </>
  );
};

export default CalculateAge;
