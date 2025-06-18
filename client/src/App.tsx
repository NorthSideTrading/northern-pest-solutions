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

// Enhanced Service Pages for SEO
import AntControl from "@/pages/services/ant-control";
import RodentControl from "@/pages/services/rodent-control";
import BedBugExterminator from "@/pages/services/bed-bug-exterminator";

// Local City Pages
import Portland from "@/pages/cities/portland";
import Augusta from "@/pages/cities/augusta";
import Bangor from "@/pages/cities/bangor";
import Waterville from "@/pages/cities/waterville";
import Lewiston from "@/pages/cities/lewiston";
import Auburn from "@/pages/cities/auburn";
import Gardiner from "@/pages/cities/gardiner";
import Skowhegan from "@/pages/cities/skowhegan";
import Brewer from "@/pages/cities/brewer";
import Pittsfield from "@/pages/cities/pittsfield";
import Winslow from "@/pages/cities/winslow";
import Oakland from "@/pages/cities/oakland";
import Belgrade from "@/pages/cities/belgrade";
import Fairfield from "@/pages/cities/fairfield";
import China from "@/pages/cities/china";
import Benton from "@/pages/cities/benton";
import Belfast from "@/pages/cities/belfast";
import Liberty from "@/pages/cities/liberty";
import Orono from "@/pages/cities/orono";

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
      <Route path="/services/ant-control" component={AntControl} />
      <Route path="/services/rodent-control" component={RodentControl} />
      <Route path="/services/bed-bug-exterminator" component={BedBugExterminator} />
      <Route path="/portland-pest-control" component={Portland} />
      <Route path="/pest-control-augusta-me" component={Augusta} />
      <Route path="/pest-control-bangor-me" component={Bangor} />
      <Route path="/pest-control-waterville-me" component={Waterville} />
      <Route path="/pest-control-lewiston-me" component={Lewiston} />
      <Route path="/pest-control-auburn-me" component={Auburn} />
      <Route path="/pest-control-gardiner-me" component={Gardiner} />
      <Route path="/pest-control-skowhegan-me" component={Skowhegan} />
      <Route path="/pest-control-brewer-me" component={Brewer} />
      <Route path="/pest-control-pittsfield-me" component={Pittsfield} />
      <Route path="/pest-control-winslow-me" component={Winslow} />
      <Route path="/pest-control-oakland-me" component={Oakland} />
      <Route path="/pest-control-belgrade-me" component={Belgrade} />
      <Route path="/pest-control-fairfield-me" component={Fairfield} />
      <Route path="/pest-control-china-me" component={China} />
      <Route path="/pest-control-benton-me" component={Benton} />
      <Route path="/pest-control-belfast-me" component={Belfast} />
      <Route path="/pest-control-liberty-me" component={Liberty} />
      <Route path="/pest-control-orono-me" component={Orono} />
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
