import ScrollManager from '@/components/common/ScrollManager';
import AppRoutes from '@/routes/AppRoutes';
import SettingsSidebar from '@/components/layout/SettingsSidebar';

export const App = () => {
  return (
    <>
      <ScrollManager />
      <div className="relative min-h-screen w-full bg-[#f4f5f8] dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500/30 selection:text-cyan-600 dark:selection:text-cyan-200">
        <AppRoutes />
        <SettingsSidebar />
      </div>
    </>
  );
};

export default App;
