import React from "react";
import { useForm } from "react-hook-form";

export default function Stepeight({ setStep, submitEntry, formdata, loading }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qeight, qnine } = values;
    submitEntry(qeight, qnine);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            How can the adolscents seek help to recover their mental health in
            this ongoing covid19 pandemic?
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name="qeight.response"
              defaultValue={formdata?.qeight?.response}
              ref={register({ required: "this field is required" })}
              rows={2}
            />
          </div>
          {errors?.qeight &&
            errors?.qeight?.response &&
            errors?.qeight?.response?.type === "required" && (
              <p className="help is-danger">
                {errors?.qeight?.response?.message}
              </p>
            )}
        </div>
        <div className="field">
          <label className="label">
            How can parents play a role in removing the depression of the
            adolscents?
          </label>
          <div className="control">
            <textarea
              className="textarea"
              name="qnine.response"
              defaultValue={formdata?.qnine?.response}
              ref={register({ required: "this field is required" })}
              rows={2}
            />
          </div>
          {errors?.qnine &&
            errors?.qnine?.response &&
            errors?.qnine?.response?.type === "required" && (
              <p className="help is-danger">
                {errors?.qnine?.response?.message}
              </p>
            )}
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              disabled={loading}
              type="button"
              onClick={() => setStep(7)}
              className="button is-link is-light"
            >
              Previous
            </button>
          </div>
          <div className="control">
            <button
              type="submit"
              disabled={loading}
              className="button is-primary"
            >
              {loading ? (
                <progress classN="progress is-small is-primary" max="100">
                  15%
                </progress>
              ) : (
                <>Submit</>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
