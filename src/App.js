import { AppWrapper } from './App.styles';
import { BingoBoard, Particles } from './components';

const App = () => {
  return (
    <AppWrapper>
      <Particles />
      <BingoBoard />
    </AppWrapper>
  );
}

export default App;
