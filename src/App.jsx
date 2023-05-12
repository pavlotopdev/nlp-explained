import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Credits from "./pages/Credits";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="container">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LSTZ3JZNVP"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LSTZ3JZNVP', {
              page_path: window.location.href,
            });
          `}
        </script>
      </Helmet>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/credits" exact component={Credits} />
          <Route path="/:path" component={Blog} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
