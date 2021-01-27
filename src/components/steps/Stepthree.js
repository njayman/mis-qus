import React from "react";
import { useForm } from "react-hook-form";

export default function Stepthree({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { qthree } = values;
    setFormdata({
      ...formdata,
      qthree,
    });
    setStep(4);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">
            Will the psychological distress observed in the students because of
            the anxiety created by coronavirus pandemic affect their future?
          </label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="qthree.choice"
                defaultChecked={formdata?.qthree?.choice === "yes"}
                value="yes"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="qthree.choice"
                defaultChecked={formdata?.qthree?.choice === "no"}
                value="no"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors?.qthree &&
            errors?.qthree?.choice &&
            errors?.qthree?.choice?.type === "required" && (
              <p className="help is-danger">
                {errors?.qthree?.choice?.message}
              </p>
            )}
        </div>
        <div className="field">
          <label className="label">why/why not?</label>
          <div className="control">
            <textarea
              className="textarea"
              name="qthree.response"
              placeholder="(optional, but please try to explain briefly)"
              defaultValue={formdata?.qthree?.response}
              ref={register}
              rows={2}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              onClick={() => setStep(2)}
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
