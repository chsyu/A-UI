import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import * as QueryString from "query-string";
import { StateContext, DispatchContext } from "../contexts"
import actionType from "../constants";

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userSignin } = useContext(StateContext);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useContext(DispatchContext);
  const { redirect } = QueryString.parse(props.location.search);
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: actionType.USER_SIGNIN_SUCCESS, payload: {email, password} });
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen;