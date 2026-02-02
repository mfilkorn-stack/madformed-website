import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/i18n";
import { Layout } from "@/components/layout/Layout";
import { OrganizationData, WebSiteData } from "@/components/StructuredData";
import Home from "@/pages/Home";
import Leistungen from "@/pages/Leistungen";
import CannabisServices from "@/pages/CannabisServices";
import MedtechServices from "@/pages/MedtechServices";
import MedizinalhandelServices from "@/pages/MedizinalhandelServices";
import KiServices from "@/pages/KiServices";
import UeberUns from "@/pages/UeberUns";
import Projekte from "@/pages/Projekte";
import Insights from "@/pages/Insights";
import InsightDetail from "@/pages/InsightDetail";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";
import ImpressumEN from "@/pages/ImpressumEN";
import DatenschutzEN from "@/pages/DatenschutzEN";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        {/* German routes (default) */}
        <Route path="/" component={Home} />
        <Route path="/leistungen" component={Leistungen} />
        <Route path="/leistungen/medizinisches-cannabis" component={CannabisServices} />
        <Route path="/leistungen/medizintechnik" component={MedtechServices} />
        <Route path="/leistungen/medizinalhandel" component={MedizinalhandelServices} />
        <Route path="/leistungen/ki-sales-bd" component={KiServices} />
        <Route path="/ueber-uns" component={UeberUns} />
        <Route path="/projekte" component={Projekte} />
        <Route path="/insights" component={Insights} />
        <Route path="/insights/:slug" component={InsightDetail} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/datenschutz" component={Datenschutz} />
        
        {/* English routes */}
        <Route path="/en" component={Home} />
        <Route path="/en/services" component={Leistungen} />
        <Route path="/en/services/medical-cannabis" component={CannabisServices} />
        <Route path="/en/services/medical-technology" component={MedtechServices} />
        <Route path="/en/services/medical-trade" component={MedizinalhandelServices} />
        <Route path="/en/services/ai-sales-bd" component={KiServices} />
        <Route path="/en/about" component={UeberUns} />
        <Route path="/en/projects" component={Projekte} />
        <Route path="/en/insights" component={Insights} />
        <Route path="/en/insights/:slug" component={InsightDetail} />
        <Route path="/en/contact" component={Kontakt} />
        <Route path="/en/legal-notice" component={ImpressumEN} />
        <Route path="/en/privacy-policy" component={DatenschutzEN} />
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <OrganizationData />
          <WebSiteData />
          <Toaster />
          <Router />
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
