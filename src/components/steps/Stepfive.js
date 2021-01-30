import React from "react";
import { useForm } from "react-hook-form";

export default function Stepfive({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qfive } = values;
    setFormdata({
      ...formdata,
      qfive,
    });
    setStep(6);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Do you think the effect on mental health can also cause physical
            distress in adolescents?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qfive.choice"
                defaultChecked={formdata?.qfive?.choice === "yes"}
                ref={register({ required: "you must select one" })}
                value="yes"
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qfive.choice"
                defaultChecked={formdata?.qfive?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qfive &&
            errors?.qfive?.choice &&
            errors?.qfive?.choice?.type === "required" && (
              <p className="help is-danger">{errors?.qfive?.choice?.message}</p>
            )}
        </div>
        <div className="field">
          <label className="label">Why?why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qfive.response"
              placeholder="(optional, but please try to explain briefly)"
              defaultValue={formdata?.qfive?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(4)}
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
