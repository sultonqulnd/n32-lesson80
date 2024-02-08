import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const Cakes = ({ numOfCakes, handleBuyCake }) => {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={handleBuyCake}>Buy a cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBuyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
