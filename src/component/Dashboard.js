import React from 'react';
import { Grid } from '@mui/material';
import StatsCard from './StatsCard';
import SalesChart from './SalesChart';
import SummaryBox from './SummaryBox';

const Dashboard = () => {
  const stats = {
    ventasCreadas: 150,
    ventasPromedio: 200,
    cantidadVentas: 75,
  };

  return (
    <div className="dashboard" style={{ padding: '16px', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Grid para las estadísticas */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatsCard title="Ventas Creadas" value={stats.ventasCreadas} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatsCard title="Ventas Promedio" value={stats.ventasPromedio} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StatsCard title="Cantidad de Ventas" value={stats.cantidadVentas} />
        </Grid>
      </Grid>

      {/* SalesChart y SummaryBox */}
      <div style={{ marginTop: '16px', width: '100%' }}>
        <SalesChart />
      </div>
      <div style={{ marginTop: '16px', width: '100%' }}>
        <SummaryBox />
      </div>
    </div>
  );
};

export default Dashboard;
