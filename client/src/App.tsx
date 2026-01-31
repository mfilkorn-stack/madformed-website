import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Leistungen from "@/pages/Leistungen";
import CannabisServices from "@/pages/CannabisServices";
import MedtechServices from "@/pages/MedtechServices";
import KiServices from "@/pages/KiServices";
import UeberUns from "@/pages/UeberUns";
import Projekte from "@/pages/Projekte";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leistungen" component={Leistungen} />
        <Route path="/leistungen/medizinisches-cannabis" component={CannabisServices} />
        <Route path="/leistungen/medizintechnik" component={MedtechServices} />
        <Route path="/leistungen/ki-sales-bd" component={KiServices} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/projekte" component={Projekte} />
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={InsightDetail} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
