import Loading from "./components/Loading";
import useAuth from "./hooks/use-auth";
import Route from "./router/Route";

function App() {
  const { initialLoading } = useAuth();
  return initialLoading ? (
    <div className="bg-color-white">
      <Loading />
    </div>
  ) : (
    <Route />
  );
}

export default App;
