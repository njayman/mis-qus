import React from "react";
import { useForm } from "react-hook-form";

export default function Stepsix({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qsix } = values;
    setFormdata({
      ...formdata,
      qsix,
    });
    setStep(7);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Can the effect on mental health have a significant impact on the
            adolscents' future?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qsix.choice"
                defaultChecked={formdata?.qsix?.choice === "yes"}
                value="yes"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qsix.choice"
                defaultChecked={formdata?.qsix?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qsix &&
            errors?.qsix?.choice &&
            errors?.qsix?.choice?.type === "required" && (
              <p className="help is-danger">{errors?.qsix?.choice?.message}</p>
            )}
        </div>
        <div className="field">
          <label className="label">Why/Why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qsix.response"
              defaultValue={formdata?.qsix?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(5)}
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
