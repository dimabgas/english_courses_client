import { connect } from "react-redux";
import { editUser } from "@/actions/user/edit";
import { getUserData } from "@/selectors";
import EditUserForm from "./component";

const mapStateToProps = (state) => ({
  EditUserForm: getUserData(state),
  loading: state.user.editUser.loading,
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (data) => dispatch(editUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);
