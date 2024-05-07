import { connect } from "react-redux";
import { setLevel } from "@/actions/courses";

import Courses from "./component";
import SetLevelForm from "./component";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setLevel: (data) => dispatch(setLevel(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetLevelForm);
