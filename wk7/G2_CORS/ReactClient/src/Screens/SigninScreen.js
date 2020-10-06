import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext, DispatchContext } from "../contexts"

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userSignin } = useContext(StateContext);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useContext(DispatchContext);
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  //   return () => {
  //     //z
  //   };
  // }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(signin(email, password));

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