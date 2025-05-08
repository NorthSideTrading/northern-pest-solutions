import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

// Service Pages
import Ants from "@/pages/services/ants";
import BedBugs from "@/pages/services/bed-bugs";
import Cockroaches from "@/pages/services/cockroaches";
import Fleas from "@/pages/services/fleas";
import MiceRats from "@/pages/services/mice-rats";
import Mosquitoes from "@/pages/services/mosquitoes";
import Snakes from "@/pages/services/snakes";
import Spiders from "@/pages/services/spiders";
import StingingInsects from "@/pages/services/stinging-insects";
import Ticks from "@/pages/services/ticks";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/ants" component={Ants} />
      <Route path="/services/bed-bugs" component={BedBugs} />
      <Route path="/services/cockroaches" component={Cockroaches} />
      <Route path="/services/fleas" component={Fleas} />
      <Route path="/services/mice-rats" component={MiceRats} />
      <Route path="/services/mosquitoes" component={Mosquitoes} />
      <Route path="/services/snakes" component={Snakes} />
      <Route path="/services/spiders" component={Spiders} />
      <Route path="/services/stinging-insects" component={StingingInsects} />
      <Route path="/services/ticks" component={Ticks} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
