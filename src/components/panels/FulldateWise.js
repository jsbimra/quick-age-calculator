import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PanelFulldateWise = (props) => {
  const [monthOptions, setMonthOptions] = useState([]);
  const [fullDate, setFullDate] = useState({
    month: 1,
    date: 1,
    year: 1900
  });

  const [calculatedAge, setCalculatedAge] = useState(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields }
  } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      setFullDate({
        ...fullDate,
        [name]: value
      });
    }
  };

  const calculateAge = (fullDate) => {
    if (fullDate) {
      console.log(fullDate);
      // const selectedDate = new Date(fullDate.year, fullDate.month-1,fullDate.date).toJSON();
      let diffDate =
        parseFloat(new Date().getDate()) - parseFloat(fullDate.date);
      let monthDiff = 12 - parseFloat(fullDate.month); //parseFloat(new Date().getUTCMonth()+1);
      let calMonth = monthDiff + parseFloat(new Date().getUTCMonth() + 1);
      const diffYear =
        parseFloat(new Date().getUTCFullYear()) - parseFloat(fullDate.year) - 1;
      let today = new Date().getDate();
      let curMonth = new Date().getUTCMonth();

      if (fullDate.date > today && fullDate.month > curMonth) {
        calMonth -= 1;
        diffDate = today;
      } else {
        diffDate = diffDate < 0 ? -diffDate : diffDate;
      }
      console.log({ monthDiff, diffDate, calMonth, diffYear });

      const calVal = `Age : <strong className="m-0 p-0">${diffYear} years ${calMonth} months ${diffDate} days </strong>
      `;

      if (Object.keys(calVal).length) {
        setCalculatedAge(calVal);
      }

      console.log({ calculatedAge });
    }
  };

  useEffect(() => {}, []);

  console.log(errors);

  return (
    <>
      <section className="panel year-wise">
        <form className="calculatorForm form form-horizontal">
          <div className="row gutter-15">
            <div className="col-sm-4 col-md-4 form-group">
              <label className="form-label" htmlFor="dateRange">
                Date:
              </label>
              <input
                id="dateRange"
                type="range"
                min="1"
                max="31"
                step="1"
                name="date"
                defaultValue={fullDate.date}
                onChange={(e) => handleChange(e)}
                onMouseUp={(e) => calculateAge(fullDate)}
                className="form-slider"
              />
            </div>
            <div className="col-sm-4 col-md-4 form-group">
              {/* <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
              >
                <option>Select Month</option>
                {monthOptions}
              </select> */}
              <label className="form-label" htmlFor="monthRange">
                Month:
              </label>
              <input
                id="monthRange"
                type="range"
                min="1"
                max="12"
                step="1"
                className="slider"
                name="month"
                defaultValue={fullDate.month}
                onChange={(e) => handleChange(e)}
                onMouseUp={(e) => calculateAge(fullDate)}
              />
            </div>
            <div className="col-sm-4 col-md-4 form-group mb-3">
            <label className="form-label" htmlFor="yearRange">
              Year:
            </label>
            <input
              id="yearRange"
              type="range"
              min="1900"
              max={new Date().getUTCFullYear()}
              step="1"
              className="slider"
              name="year"
              defaultValue={fullDate.year}
              onChange={(e) => handleChange(e)}
              onMouseUp={(e) => calculateAge(fullDate)}
            />

            {/* <input
              type="number"
              className="form-control"
              id="birthYear"
              name="birthYear"
              placeholder="Birth Year"
              defaultValue={year}
              maxLength="4"
              minLength="4"
              onChange={(e) => calculateAge(e)}
            /> */}
          </div>
          </div>
          
          <div className="row">
            <div className="col-md-12">

                <h4 className="mt-4">
                  Selected Date:{" "}
                  <strong>
                    {`${fullDate.date}-${fullDate.month}-${fullDate.year}`}
                  </strong>
                </h4>

                {calculatedAge !== null ? (
                  <h3 className="mt-2 pt-3">
                    <div dangerouslySetInnerHTML={{ __html: calculatedAge }} />
                  </h3>
                ) : (
                  ""
                )}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default PanelFulldateWise;
