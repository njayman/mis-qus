import React from "react";
import { useForm } from "react-hook-form";

export default function Stepone({ setStep, formdata, setFormdata }) {
  const { register, errors, handleSubmit } = useForm();
  const onsubmit = (values) => {
    let { gender, parent } = values;
    setFormdata({
      ...formdata,
      gender,
      parent,
    });
    setStep(2);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="card-content">
        <div className="field">
          <label className="label">You are:</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="gender"
                defaultChecked={formdata?.gender === "male"}
                value="male"
                ref={register({ required: "you must select your gender" })}
              />
              Male
            </label>
            <label className="radio">
              <input
                type="radio"
                name="gender"
                defaultChecked={formdata?.gender === "female"}
                value="female"
                ref={register({ required: "you must select your gender" })}
              />
              Female
            </label>
            <label className="radio">
              <input
                type="radio"
                name="gender"
                defaultChecked={formdata?.gender === "others"}
                value="others"
                ref={register({ required: "you must select your gender" })}
              />
              Others
            </label>
          </div>
          {errors.gender && errors.gender.type === "required" && (
            <p className="help is-danger">{errors?.gender?.message}</p>
          )}
        </div>
        <div className="field">
          <label className="label">Are you a parent?</label>
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="parent"
                defaultChecked={formdata?.parent === "parent"}
                value="parent"
                ref={register({ required: "you must select one" })}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="parent"
                defaultChecked={formdata?.parent === "not-parent"}
                value="not-parent"
                ref={register({ required: "you must select one" })}
              />
              No
            </label>
          </div>
          {errors.parent && errors.parent.type === "required" && (
            <p className="help is-danger">{errors?.parent?.message}</p>
          )}
        </div>
        <div className="field">
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
