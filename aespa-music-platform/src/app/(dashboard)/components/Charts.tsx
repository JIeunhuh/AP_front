"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

const data = [
  { name: "Sun", a: 1200, b: 800 },
  { name: "Mon", a: 1800, b: 1200 },
  { name: "Tue", a: 2600, b: 1600 },
  { name: "Wed", a: 3000, b: 2000 },
  { name: "Thu", a: 3600, b: 2400 },
  { name: "Fri", a: 4200, b: 2800 },
  { name: "Sat", a: 2800, b: 2600 },
];

const leads = [
  { name: "W1", v: 400 },
  { name: "W2", v: 560 },
  { name: "W3", v: 520 },
  { name: "W4", v: 610 },
  { name: "W5", v: 580 },
  { name: "W6", v: 640 },
  { name: "W7", v: 620 },
];

export function SalesCard() {
  return (
    <div className="card h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs muted">Sales</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <span className="text-xs muted">Current Month</span>
        </div>
      </div>
      
      <div className="h-20 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Line type="monotone" dataKey="a" stroke="#ffb84d" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-2xl font-bold text-white">879k</div>
      <div className="text-xs text-green-300">+23% Higher</div>
    </div>
  );
}

export function RevenueCard() {
  return (
    <div className="card h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs muted">$85.9K</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-xs muted">Overall Revenue</span>
        </div>
      </div>
      
      <div className="h-20 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Bar dataKey="a" fill="#4ade80" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-2xl font-bold text-white">452k</div>
      <div className="text-xs text-green-300">+66% Higher</div>
    </div>
  );
}

export function LeadsCard() {
  return (
    <div className="card h-[160px]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs muted">Generated Leads</div>
        <div className="text-xs muted">Weekly Report</div>
      </div>
      
      <div className="h-20 mb-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={leads}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Area type="monotone" dataKey="v" stroke="#20d3ff" fill="#20d3ff22" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm">👤</span>
        <span className="text-sm">Total Leads</span>
        <span className="text-lg font-bold text-white">987</span>
      </div>
      <div className="text-xs text-green-300">+18% This Week</div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-sm">Converted</span>
        <span className="text-sm font-bold text-white">486</span>
        <span className="text-xs text-green-300">+0.8%</span>
      </div>
    </div>
  );
}

export function WeeklyIncomeChart() {
  return (
    <div className="card h-[320px]">
      <div className="text-xs muted mb-3">Weekly Income</div>
      <div className="text-sm text-white mb-4">Highest income generated on Friday.</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#9aa3ff" />
          <YAxis stroke="#9aa3ff" />
          <Tooltip contentStyle={{ background: "#141a3b", border: "1px solid #272d61" }} />
          <Line type="monotone" dataKey="a" stroke="#ffb84d" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="b" stroke="#20d3ff" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function OrdersChart() {
  return (
    <div className="card h-[320px]">
      <div className="text-xs muted mb-3">Orders</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#9aa3ff" />
          <YAxis stroke="#9aa3ff" />
          <Tooltip contentStyle={{ background: "#141a3b", border: "1px solid #272d61" }} />
          <Area type="monotone" dataKey="a" stroke="#6a5cff" fill="#6a5cff33" />
          <Area type="monotone" dataKey="b" stroke="#20d3ff" fill="#20d3ff33" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function KPICard({ icon, title, value, change, changeColor = "red" }: {
  icon: string;
  title: string;
  value: string;
  change: string;
  changeColor?: "red" | "green";
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-700">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <div className="text-sm muted">{title}</div>
        <div className="text-lg font-semibold text-white">{value}</div>
      </div>
      <div className="text-right">
        <div className={`text-sm ${
          changeColor === "green" ? "text-green-300" : "text-red-300"
        }`}>
          {change}
        </div>
        <div className={`text-xs ${
          changeColor === "green" ? "text-green-300" : "text-red-300"
        }`}>
          {changeColor === "green" ? "↗" : "↘"}
        </div>
      </div>
    </div>
  );
}

export function MetricCard({ icon, value, label, color = "blue" }: {
  icon: string;
  value: string;
  label: string;
  color?: "blue" | "green";
}) {
  return (
    <div className="card text-center h-[120px] flex flex-col justify-center">
      <div className={`text-3xl mb-2 ${
        color === "green" ? "text-green-400" : "text-blue-400"
      }`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm muted">{label}</div>
    </div>
  );
}
