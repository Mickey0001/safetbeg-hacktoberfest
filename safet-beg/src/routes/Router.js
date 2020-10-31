import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Works from "./Works";

const Router = () => {
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div
      style={{
        ...props,
      }}
      key={key}
    >
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/works/:path" component={Works} />
        <Redirect to='/' />
      </Switch>
    </animated.div>
  ));
};

export default Router;
