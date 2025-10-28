import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Configurator from "./pages/Configurator";
import Products from "./pages/Products";
import Company from "./pages/Company";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import B2B from "./pages/B2B";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/konfigurator"} component={Configurator} />
      <Route path={"/oferta"} component={Products} />
      <Route path={"/firma"} component={Company} />
      <Route path={"/dokumentacja"} component={Documentation} />
      <Route path={"/kontakt"} component={Contact} />
      <Route path={"/b2b"} component={B2B} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
