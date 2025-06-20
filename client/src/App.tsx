import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import { lazy, Suspense } from "react";

// Lazy load all pages for optimal code splitting
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Lazy load service pages
const Ants = lazy(() => import("@/pages/services/ants"));
const BedBugs = lazy(() => import("@/pages/services/bed-bugs"));
const Cockroaches = lazy(() => import("@/pages/services/cockroaches"));
const Fleas = lazy(() => import("@/pages/services/fleas"));
const MiceRats = lazy(() => import("@/pages/services/mice-rats"));
const Mosquitoes = lazy(() => import("@/pages/services/mosquitoes"));
const Snakes = lazy(() => import("@/pages/services/snakes"));
const Spiders = lazy(() => import("@/pages/services/spiders"));
const StingingInsects = lazy(() => import("@/pages/services/stinging-insects"));
const Ticks = lazy(() => import("@/pages/services/ticks"));
const AntControl = lazy(() => import("@/pages/services/ant-control"));
const RodentControl = lazy(() => import("@/pages/services/rodent-control"));
const BedBugExterminator = lazy(() => import("@/pages/services/bed-bug-exterminator"));

// Lazy load city pages
const Portland = lazy(() => import("@/pages/cities/portland"));
const Augusta = lazy(() => import("@/pages/cities/augusta"));
const Bangor = lazy(() => import("@/pages/cities/bangor"));
const Waterville = lazy(() => import("@/pages/cities/waterville"));
const Lewiston = lazy(() => import("@/pages/cities/lewiston"));
const Auburn = lazy(() => import("@/pages/cities/auburn"));
const Gardiner = lazy(() => import("@/pages/cities/gardiner"));
const Skowhegan = lazy(() => import("@/pages/cities/skowhegan"));
const Brewer = lazy(() => import("@/pages/cities/brewer"));
const Pittsfield = lazy(() => import("@/pages/cities/pittsfield"));
const Winslow = lazy(() => import("@/pages/cities/winslow"));
const Oakland = lazy(() => import("@/pages/cities/oakland"));
const Belgrade = lazy(() => import("@/pages/cities/belgrade"));
const Fairfield = lazy(() => import("@/pages/cities/fairfield"));
const China = lazy(() => import("@/pages/cities/china"));
const Benton = lazy(() => import("@/pages/cities/benton"));
const Belfast = lazy(() => import("@/pages/cities/belfast"));
const Liberty = lazy(() => import("@/pages/cities/liberty"));
const Orono = lazy(() => import("@/pages/cities/orono"));

// Lazy load service area pages
const PestControlPortlandMe = lazy(() => import("@/pages/service-areas/pest-control-portland-me"));
const PestControlBangorMe = lazy(() => import("@/pages/service-areas/pest-control-bangor-me"));
const PestControlLewistonMe = lazy(() => import("@/pages/service-areas/pest-control-lewiston-me"));
const PestControlAugustaMe = lazy(() => import("@/pages/service-areas/pest-control-augusta-me"));
const PestControlSouthPortlandMe = lazy(() => import("@/pages/service-areas/pest-control-south-portland-me"));

// Loading component for Suspense fallbacks
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--nps-forest)]"></div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
        
        {/* Service Area Pages */}
        <Route path="/pest-control-portland-me" component={PestControlPortlandMe} />
        <Route path="/pest-control-bangor-me" component={PestControlBangorMe} />
        <Route path="/pest-control-lewiston-me" component={PestControlLewistonMe} />
        <Route path="/pest-control-augusta-me" component={PestControlAugustaMe} />
        <Route path="/pest-control-south-portland-me" component={PestControlSouthPortlandMe} />
        
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
