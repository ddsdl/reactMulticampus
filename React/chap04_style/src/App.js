import A01Style from './components/A01Style'
import A02StyleModule from './components/A02StyleModule'
import A03Classnames from './components/A03Classnames'
import A04StyledComponent from './components/A04StyledComponent'

function App() {
  return (
    <div className="m-3 container">
      <div className="row">
        <h1 className="col-sm-12">Chap04 Style</h1>

        <div className="col-sm-12 mb-5">
          <A04StyledComponent></A04StyledComponent>
        </div>

        <div className="col-sm-12 mb-5">
          <A03Classnames></A03Classnames>
        </div>

        <div className="col-sm-12 mb-5">
          <A02StyleModule></A02StyleModule>
        </div>

        <div className="col-sm-12">
          <A01Style></A01Style>
        </div>


      </div>
    </div>
  );
}

export default App;
