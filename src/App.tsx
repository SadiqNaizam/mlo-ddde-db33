import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AcademicsResearchPage from "./pages/AcademicsResearchPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import CampusInnovationHubPage from "./pages/CampusInnovationHubPage";
import FacultyPage from "./pages/FacultyPage";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/academics-research" element={<AcademicsResearchPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus-innovation-hub" element={<CampusInnovationHubPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
