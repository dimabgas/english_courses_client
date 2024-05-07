import { connect } from "react-redux";
import { getUserData } from "@/selectors";

import Header from "./component";

const mapStateToProps = (state) => ({
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
