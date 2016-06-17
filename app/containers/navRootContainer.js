import { connect } from 'react-redux'
import NavigationRoot from '../components/NavRoot'
import { push, pop } from '../actions/navActions'
function mapStateToProps (state) {
  return {
    navigation: state.navigation
  }
}
export default connect(
  mapStateToProps,
  {
    pushRoute: (route) => (push(route)),
    popRoute: () => (pop())
  }
)(NavigationRoot)
