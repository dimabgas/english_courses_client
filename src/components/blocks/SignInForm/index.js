import { connect } from "react-redux";

import { loginUser } from "@/actions/user/login";

import { userLoginErrors } from "@/selectors";

import SignInForm from "./component";

const mapStateToProps = (state) => ({
  loginErrors: userLoginErrors(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoginUser: (data) => dispatch(loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
