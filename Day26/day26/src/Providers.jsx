import Login from "./Login";
import { Provider } from 'react-redux'
import store from "./store";

function Providers() {
    return (
        <Provider store={store}>
            <div className="App">
                
                <Login/>
            </div>
        </Provider>

    );
}

export default Providers;