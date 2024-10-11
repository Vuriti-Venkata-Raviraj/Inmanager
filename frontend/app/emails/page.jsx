import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Summaries from '../components/Summaries';

export default function MainPage() {
  return (
    <div className="flex justify-center gap-5 p-10 min-h-screen w-full bg-slate-50">
      <Sidebar />
      <div className="flex flex-col w-[70%]">
        <Navbar />
        <Summaries />
      </div>
    </div>
  );
}
