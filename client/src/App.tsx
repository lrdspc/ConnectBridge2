import { Switch, Route } from 'wouter';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RouteMapPage from './pages/RouteMapPage';
import NotFound from './pages/not-found';
import VisitListPage from './pages/VisitListPage';
import NewVisitPage from './pages/NewVisitPage';
import VisitDetailsPage from './pages/VisitDetailsPage';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { Toaster } from '@/components/ui/toaster';

// Novas páginas para o fluxo revisado
import ClientesPage from './pages/ClientesPage';
import ClienteDetalhesPage from './pages/ClienteDetalhesPage';
import RelatorioVistoriaPage from './pages/RelatorioVistoriaPage';
import DynamicDashboardPage from './pages/DynamicDashboardPage';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={DashboardPage} />
          <Route path="/perfil" component={ProfilePage} />
          <Route path="/rotas" component={RouteMapPage} />
          
          {/* Nova página de dashboard com widgets */}
          <Route path="/dashboard-widgets" component={DynamicDashboardPage} />
          
          {/* Páginas antigas de visitas - serão gradualmente migradas para o novo fluxo */}
          <Route path="/visitas" component={VisitListPage} />
          <Route path="/visitas/nova" component={NewVisitPage} />
          <Route path="/visitas/:id" component={VisitDetailsPage} />
          
          {/* Novas páginas do fluxo revisado */}
          <Route path="/clientes" component={ClientesPage} />
          <Route path="/clientes/:id" component={ClienteDetalhesPage} />
          
          {/* Página do relatório de vistoria técnica */}
          <Route path="/relatorio-vistoria" component={RelatorioVistoriaPage} />
          
          {/* Rota alternativa para o relatório de vistoria */}
          <Route path="/vistoria-far" component={RelatorioVistoriaPage} />
          
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;