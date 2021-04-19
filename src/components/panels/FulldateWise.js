import React, { useState } from "react";
import { useForm } from "react-hook-form";

const PanelFulldateWise = (props) => {
  const [year, setYear] = useState("");
  const [calculatedAge, setCalculatedAge] = useState(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields }
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const calculateAge = (e) => {
    console.log("value is ", year);

    const { value } = e.target;
    if (e.target && value.length > 3) {
      console.log(value);
      setYear(value);

      const currentYear = new Date().getUTCFullYear();

      const calVal = Math.floor(parseInt(currentYear) - parseInt(value) - 1);

      if (calVal) {
        setCalculatedAge(calVal);
      }
      console.log({ calculateAge });
    }
  };

  const genMonthsOption = () => {
    let options = [];
    for (let i = 1; i <= 12; i++) {
      options.push(<option value={i}>{i}</option>);
    }

    console.log(options);
    return options;
  };
  console.log(errors);

  return (
    <>
      <section className="panel year-wise">
        <form className="calculatorForm form-horizontal">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelect">Date</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option>Select Month</option>
              {genMonthsOption()}
            </select>
            <label for="floatingSelect">Month</label>
          </div>
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

export default PanelFulldateWise;
