import NewsCard from "../components/NewsCard";
import Analytics from "../components/Analytics";



export default function Home() {
  return (
    <div className="page">
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

      <div className="grid lg:grid-cols-3 gap-5 mb-16">
       <div className="inline-block bg-gradient-to-br from-gray-100 to-gray-200 rounded shadow-sm">
        <NewsCard />
          </div>
        
          <Analytics/>
        
      </div>
      <div className="grid col-1 bg-white mt-10 h-96 shadow-sm"></div>
    </div>
  );
}
