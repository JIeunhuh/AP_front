import Sidebar from "./(dashboard)/components/Sidebar";
import Topbar from "./(dashboard)/components/Topbar";
import { 
  SalesCard, 
  RevenueCard, 
  LeadsCard, 
  WeeklyIncomeChart,
  OrdersChart,
  KPICard,
  MetricCard
} from "./(dashboard)/components/Charts";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          
          <div className="p-4 md:p-6 lg:p-8 space-y-6">
            {/* 상단 3개 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <SalesCard />
              <RevenueCard />
              <LeadsCard />
            </div>

            {/* 중간 섹션 - 주간 수입 차트 + KPI */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-2">
                <WeeklyIncomeChart />
              </div>
              <div className="xl:col-span-1 space-y-3">
                <KPICard 
                  icon="🛒" 
                  title="Total Sales" 
                  value="7,392" 
                  change="325 30.9%" 
                  changeColor="red" 
                />
                <KPICard 
                  icon="💰" 
                  title="Revenue" 
                  value="$5,995" 
                  change="+$838 56.2%" 
                  changeColor="green" 
                />
                <KPICard 
                  icon="🏪" 
                  title="Products" 
                  value="2,387" 
                  change="+46 28.8%" 
                  changeColor="green" 
                />
                <KPICard 
                  icon="📢" 
                  title="Ads Spent" 
                  value="$765" 
                  change="-60 33.3%" 
                  changeColor="red" 
                />
                <KPICard 
                  icon="⚙️" 
                  title="Expenses" 
                  value="$884" 
                  change="+982 3.9%" 
                  changeColor="green" 
                />
              </div>
            </div>

            {/* 하단 섹션 - 주문 차트 + 메트릭 */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="xl:col-span-2">
                <OrdersChart />
              </div>
              <div className="xl:col-span-1 grid grid-cols-2 gap-3">
                <MetricCard icon="📄" value="58,000" label="Sales" color="blue" />
                <MetricCard icon="👥" value="22,000" label="Customers" color="green" />
                <MetricCard icon="📦" value="36,000" label="Products" color="blue" />
                <MetricCard icon="📊" value="$9,000" label="Revenue" color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}