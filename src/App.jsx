import { useState } from "react";
import "./App.css";
import { Page3 } from "./components/formPages/Page3";
import { Page4 } from "./components/formPages/Page4";
import { Preview } from "./components/Preview";
import { Page2 } from "./components/formPages/Page2";
import { Page1 } from "./components/formPages/Page1";
import BackButtonIcon from "./assets/Vector.png";

function App() {
  const [page, setPage] = useState(1);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const progressArray = Array(4)
    .fill(0)
    .map((item, index) => (
      <div className="header-item" id={index + 1 <= page ? "active" : ""} />
    ));

  return (
    <div className="App">
      <header className="app-header">{progressArray}</header>
      <section className="app-body-container">
        <div className="app-body">
          <div>
            {page != 1 && page != 5 && (
              <button className="prev-button" onClick={() => setPage(page - 1)}>
                <img src={BackButtonIcon} />
              </button>
            )}
          </div>
          {
            {
              1: <Page1 setDisableSubmit={setDisableSubmit} />,
              2: <Page2 setDisableSubmit={setDisableSubmit} />,
              3: <Page3 setDisableSubmit={setDisableSubmit} />,
              4: <Page4 isFinalPage={false} />,
              5: <Page4 isFinalPage={true} />,
            }[page]
          }
          <div>{page < 4 && <Preview />}</div>
        </div>
      </section>
      {page < 5 && (
        <footer className="app-footer">
          <button
            className="submit-button"
            disabled={disableSubmit}
            onClick={() => setPage(page + 1)}
          >
            {page != 4 ? "Next" : "Submit"}
          </button>
        </footer>
      )}
    </div>
  );
}

export default App;
