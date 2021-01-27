import React from "react";
import { useForm } from "react-hook-form";

export default function Steptwo({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qtwo } = values;
    setFormdata({
      ...formdata,
      qtwo,
    });
    setStep(3);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Do you think the current situation due to Covid-19 creates
            psychological distress among the adolscents?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qtwo.choice"
                defaultChecked={formdata?.qtwo?.choice === "yes"}
                value="yes"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qtwo.choice"
                defaultChecked={formdata?.qtwo?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qtwo &&
            errors?.qtwo?.choice &&
            errors?.qtwo?.choice?.type === "required" && (
              <p className="help is-danger">{errors?.qtwo?.choice?.message}</p>
            )}
        </div>
        <div className="field">
          <label className="label">Why/Why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qtwo.response"
              defaultValue={formdata?.qtwo?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="button is-link is-light"
            >
              Previous
            </button>
          </div>
          <div className="control">
            <button type="submit" className="button is-link">
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
