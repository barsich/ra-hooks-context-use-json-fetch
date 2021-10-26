import './App.css';
import TestComponent from './components/TestComponent';

export default function App() {
  return (
    <>
      <TestComponent
        url={process.env.REACT_APP_DATA_URL}
        opts={{
          method: 'GET',
        }}
        title="ComponentData"
      />
      <TestComponent
        url={process.env.REACT_APP_ERROR_URL}
        opts={{
          method: 'GET',
        }}
        title="ComponentError"
      />
      <TestComponent
        url={process.env.REACT_APP_LOADING_URL}
        opts={{
          method: 'GET',
        }}
        title="ComponentLoading"
      />
    </>
  );
}
