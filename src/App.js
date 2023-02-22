import "./App.css";

import React from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  // const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        {/* <LoadingBar height={3} color="#f11946" progress={progress} /> */}
        <Switch>
          <Route exact path="/">
            <News
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
