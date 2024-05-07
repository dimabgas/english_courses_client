import { connect } from "react-redux";

import { registerUser } from "@/actions/user/register";

import { userRegisterErrors } from "@/selectors";

import SignUpForm from "./component";

const mapStateToProps = (state) => ({
  registerErrors: userRegisterErrors(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
