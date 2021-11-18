import { Switch, Route } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { Posts } from "../pages/Posts";
import { ShowPosts } from "../pages/ShowPosts";

export default function index() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/home" exact component={Posts} />
      <Route path="/posts/:id" exact component={ShowPosts}/>
    </Switch>
  );
}