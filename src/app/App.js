import { AccountSettings } from '../pages/account-settings';
import { MainContainer } from '../shared/main-container';
import { NavigationBar } from '../shared/navigation-bar';

function App() {
  return (
    <MainContainer>
      <NavigationBar />
      <AccountSettings />
    </MainContainer>
  );
}

export default App;
