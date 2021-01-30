import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

export default function Result() {
  const [entries, setEntries] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const getEntries = async () => {
    try {
      const { data } = await axios.get("/api/getentries");
      if (data.success) {
        setEntries(data.entries);
        setStats(data.stats);
        setLoading(false);
        console.log(data);
      } else {
        alert(data.message);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Result of data collected
          </a>
        </div>
      </nav>
      {loading ? (
        <progress className="progress is-small is-primary" max="100">
          15%
        </progress>
      ) : (
        <div className="container">
          <article className="message">
            <div className="message-header">
              <p>Statistics</p>
            </div>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Total Entries</p>
                  <p className="title">{entries?.length}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Male</p>
                  <p className="title">{stats?.gender?.male}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Female</p>
                  <p className="title">{stats?.gender?.female}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Parent</p>
                  <p className="title">{stats?.parents?.parent}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Not parent</p>
                  <p className="title">{stats?.parents?.notparent}</p>
                </div>
              </div>
            </nav>
          </article>
          <nav className="panel">
            <p className="panel-heading">
              Do you think the current situation due to Covid-19 creates
              psychological distress among the adolescents?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.one?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.one?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qtwo?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qtwo?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              Will the psychological distress observed in the students because
              of the anxiety created by coronavirus pandemic affect their
              future?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.two?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.two?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qthree?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qthree?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              Are the females more prone to depression than the male students in
              this covid19 pandemic?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.three?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.three?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qfour?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qfour?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              Do you think the effect on mental health can also cause physical
              distress in adolescents?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.four?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.four?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qfive?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qfive?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              Can the effect on mental health have a significant impact on the
              adolescents' future?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.five?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.five?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qsix?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qsix?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              Do you think prolonged online sessions due to practicing social
              distancing in front of a computer screen can have a negative
              impact on mental health?
            </p>
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">Yes</p>
                  <p className="title">{stats?.question?.five?.yes}</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <p className="heading">No</p>
                  <p className="title">{stats?.question?.five?.no}</p>
                </div>
              </div>
            </nav>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qseven?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qseven?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              How can the adolescents seek help to recover their mental health
              in this ongoing covid19 pandemic?
            </p>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qeight?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qeight?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
          <nav className="panel">
            <p className="panel-heading">
              How can parents play a role in removing the depression of the
              adolescents?
            </p>
            {entries?.map((entry, id) => (
              <Fragment key={id}>
                {entry?.qnine?.response && (
                  <div className="panel-block">
                    <p className="control">{entry?.qnine?.response}</p>
                  </div>
                )}
              </Fragment>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
