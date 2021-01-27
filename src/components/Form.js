import React, { useEffect, useState } from "react";
import axios from "axios";
import Stepone from "./steps/Stepone";
import Steptwo from "./steps/Steptwo";
import Stepthree from "./steps/Stepthree";
import Stepfour from "./steps/Stepfour";
import Stepsix from "./steps/Stepsix";
import Stepseven from "./steps/Stepseven";
import Stepfive from "./steps/Stepfive";
import Stepeight from "./steps/Stepeight";

export default function Form({ setThanks, setMesssage }) {
  const [step, setStep] = useState(1);
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  let a = formdata.toString();
  const submitEntry = async (qeight, qnine) => {
    setLoading(true);
    let submitdata = formdata;
    submitdata.qeight = qeight;
    submitdata.qnine = qnine;
    try {
      const { data } = await axios.post("/api/addentry", submitdata);
      if (data.success) {
        setMesssage(data.message);
        setLoading(false);
        setThanks(true);
      } else {
        setLoading(false);
        alert(data.message);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };
  useEffect(() => {
    console.log(formdata);
  }, [a, formdata]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Step {step} of 8</p>
        </header>
        {step === 1 && (
          <Stepone
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 2 && (
          <Steptwo
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 3 && (
          <Stepthree
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 4 && (
          <Stepfour
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 5 && (
          <Stepfive
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 6 && (
          <Stepsix
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 7 && (
          <Stepseven
            setStep={(s) => setStep(s)}
            formdata={formdata}
            setFormdata={(d) => setFormdata(d)}
          />
        )}
        {step === 8 && (
          <Stepeight
            loading={loading}
            setStep={(s) => setStep(s)}
            formdata={formdata}
            submitEntry={(d, e) => submitEntry(d, e)}
          />
        )}
      </div>
    </div>
  );
}
