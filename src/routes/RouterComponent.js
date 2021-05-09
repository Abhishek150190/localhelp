import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, LostComponent, HelpPage, SupportPage, FeedsPage, StatsPage } from "./pages";

// Define Routes here
export const Routes = [
  {
    name: "/",
    component: <HomePage />,
  },
  {
    name: "/stats",
    component: <StatsPage />,
  },
  {
    name: "/help",
    component: <HelpPage />,
  },
  {
    name: "/feeds",
    component: <FeedsPage />,
  },
  {
    name: "/support",
    component: <SupportPage />,
  },
  {
    name: "*",
    component: <LostComponent />,
  },
];

// Mapping the defined routes
function RouterComponent() {
  return (
    <Router>
      <Switch>
        {Routes.map((route) => (
          <Route exact path={route.name}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default RouterComponent;
