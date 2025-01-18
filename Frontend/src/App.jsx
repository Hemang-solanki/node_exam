import MainRoutes from './Routes/MainRoutes'
import { Provider } from "@/components/ui/provider"


function App() {

  return (
    <Provider>
    <MainRoutes/> 
    </Provider>
  );
}

export default App;
