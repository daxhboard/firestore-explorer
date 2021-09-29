import SingleDocument from "./components/Document/SingleDocument";
import View from "./components/View";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <View className="mt-5 mb-5">
        <SingleDocument />
      </View>
    </div>
  );
}

export default App;
