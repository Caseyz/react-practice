import { Provider } from 'react-redux'
import store from './store/store'
import Show from './pages/show/index'
import BtnGroup from './pages/btn/index'

function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Show></Show>
        <BtnGroup></BtnGroup>
      </div>
    </Provider>
  );
}

export default App;
