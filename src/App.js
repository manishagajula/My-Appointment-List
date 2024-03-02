import "./App.css";
import { PatientList } from "./component/patientList";
function App() {
  return (
    <div className="App">
      {/* <header className="text-2xl text-gray-600">
        Today's Appointment List
      </header> */}
      <PatientList />
    </div>
  );
}

export default App;
