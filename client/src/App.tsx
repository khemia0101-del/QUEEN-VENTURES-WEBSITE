import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/Home";
import MissionForwardApplyPage from "./pages/MissionForwardApply";
import GrantflowWaitlistPage from "./pages/GrantflowWaitlist";
import DonatePage from "./pages/Donate";
import DonateSuccessPage from "./pages/DonateSuccess";
import NewsletterArchivePage from "./pages/NewsletterArchive";
import NewsletterDetailPage from "./pages/NewsletterDetail";
import RentalsPage from "./pages/Rentals";
import CareersPage from "./pages/Careers";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={HomePage} />
      <Route path={"/mission-forward/apply"} component={MissionForwardApplyPage} />
      <Route path={"/grantflow/waitlist"} component={GrantflowWaitlistPage} />
      <Route path={"/donate"} component={DonatePage} />
      <Route path={"/donate/success"} component={DonateSuccessPage} />
      <Route path={"/newsletter"} component={NewsletterArchivePage} />
      <Route path={"/newsletter/:id"} component={NewsletterDetailPage} />
      <Route path={"/rentals"} component={RentalsPage} />
      <Route path={"/careers"} component={CareersPage} />
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
