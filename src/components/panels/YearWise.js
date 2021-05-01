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
        <form className="calculatorForm form form-horizontal">
          <div className="form-group mt-2 mb-3">
            <label className="form-label" 
              htmlFor="birthYear">Enter your birth year:</label>
            <input
              type="number"
              className="form-control text-center w-50 m-auto"
              id="birthYear"
              name="birthYear"
              placeholder="Birth Year"
              defaultValue={year}
              maxLength="4"
              minLength="4"
              onChange={(e) => calculateAge(e)}
            />
          </div>

          {calculatedAge ? (
            <h4 className="pt-1">
              Your age is <strong className="m-0 p-0">{calculatedAge} years</strong>

              <p  className="pt-3 d-inline-block">
                <small>(if birth date is passed than you are </small> <strong className="d-inline m-0 p-0">{calculatedAge + 1} years old</strong>)
              </p>
            </h4>
          ) : (
            ""
          )}

          {/* <div className="form-group">
            <input className="btn btn-secondary" type="submit" />
          </div> */}
        </form>
      </section>
    </>
  );
};

export default PanelYearWise;
