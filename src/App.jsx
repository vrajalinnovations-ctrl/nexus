import ScrollManager from '@/components/common/ScrollManager';
import AppRoutes from '@/routes/AppRoutes';

export const App = () => {
  return (
    <>
      <ScrollManager />
      <div className="relative min-h-screen w-full bg-black text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        <AppRoutes />
      </div>
    </>
  );
};

export default App;
