import React from "react";
import { useForm } from "react-hook-form";

export default function Stepseven({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qseven } = values;
    setFormdata({
      ...formdata,
      qseven,
    });
    setStep(8);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Do you think prolonged online sessions due to practicing social
            distancing in front of a computer screen can have a negative impact
            on mental health?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qseven.choice"
                defaultChecked={formdata?.qseven?.choice === "yes"}
                value="yes"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qseven.choice"
                defaultChecked={formdata?.qseven?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qseven &&
            errors?.qseven?.choice &&
            errors?.qseven?.choice?.type === "required" && (
              <p className="help is-danger">
                {errors?.qseven?.choice?.message}
              </p>
            )}
        </div>
        <div className="field">
          <label className="label">How,why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qseven.response"
              placeholder="(optional, but please try to explain briefly)"
              defaultValue={formdata?.qseven?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(6)}
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
