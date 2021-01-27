import React from "react";
import { useForm } from "react-hook-form";

export default function Stepfour({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qfour } = values;
    setFormdata({
      ...formdata,
      qfour,
    });
    setStep(5);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Are the females more prone to depression than the male students in
            this covid19 pandemic?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qfour.choice"
                defaultChecked={formdata?.qfour?.choice === "yes"}
                value="yes"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qfour.choice"
                defaultChecked={formdata?.qfour?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qfour &&
            errors?.qfour?.choice &&
            errors?.qfour?.choice?.type === "required" && (
              <p className="help is-danger">{errors?.qfour?.choice?.message}</p>
            )}
        </div>
        <div className="field">
          <label className="label">why?/why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qfour.response"
              placeholder="(optional, but please try to explain briefly)"
              defaultValue={formdata?.qfour?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(3)}
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
