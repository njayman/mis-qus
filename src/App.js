import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [start, setStart] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <div className="container has-background-light">
      {thanks ? (
        <div
          className="has-background-primary"
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="is-size-1 has-text-white">{message}</h1>
        </div>
      ) : (
        <>
          {start ? (
            <Form
              setThanks={(t) => setThanks(t)}
              setMesssage={(m) => setMessage(m)}
            />
          ) : (
            <>
              <section className="hero is-primary">
                <div className="hero-body">
                  <div className="container">
                    <h2 className="is-size-3">Welcome</h2>
                    <p className="is-size-4 has-text-black">
                      We are conducting a research on
                    </p>
                    <h1 className="is-size-1">
                      Impact of Covid-19 on mental health of adolscents
                    </h1>
                    <p className="has-text-black is-size-5">
                      Please help us out by filling up the form
                    </p>
                    <button
                      className="button is-large has-background-black has-text-white"
                      onClick={() => setStart(true)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </section>
              <section>
                <div className="container">
                  <p className="subtitle has-text-danger	">
                    Disclaimer: We do not collect any information from your
                    device. Only the information that you input in the form
                    fields are collected. Please do not input your email,
                    password, name or anything personal in this form fields.
                    Thanks for your co-operation.
                  </p>
                </div>
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
