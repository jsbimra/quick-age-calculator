import React, { useState } from "react";

const PanelYearWise = (props) => {
  const [year, setYear] = useState("");
  const [calculatedAge, setCalculatedAge] = useState(null);

  const calculateAge = (e) => {
    const { value } = e.target;
    if (e.target && value.length > 3) {
      // console.log(value);
      setYear(value);

      const currentYear = new Date().getUTCFullYear();
      const calVal = Math.floor(parseInt(currentYear) - parseInt(value) - 1);

      if (calVal) {
        setCalculatedAge(calVal);
      }
      // console.log({ calculateAge });
    }
  };

  return (
    <>
      <section className="panel year-wise">
        <form className="calculatorForm form1-horizontal">
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="birthYear"
              name="birthYear"
              placeholder="Birth Year"
              defaultValue={year}
              maxLength="4"
              minLength="4"
              onChange={(e) => calculateAge(e)}
            />
            <label htmlFor="birthYear">Enter Birth Year:</label>
            {calculatedAge ? (
              <h4 className="pt-3">
                Age is <strong className="m-0 p-0">{calculatedAge}</strong> or{" "}
                <strong className="m-0 p-0">{calculatedAge + 1}</strong> <br />
                (If birth date is passed in this year!)
              </h4>
            ) : (
              ""
            )}
          </div>

          {/* <div className="form-group">
            <input className="btn btn-secondary" type="submit" />
          </div> */}
        </form>
      </section>
    </>
  );
};

export default PanelYearWise;
