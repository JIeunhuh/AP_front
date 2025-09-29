type Props = {
  title: string;
  value: string;
  delta?: string;
  deltaColor?: "green" | "red";
  subtitle?: string;
  subtitleColor?: string;
  icon?: string;
};

export default function StatCard({ 
  title, 
  value, 
  delta, 
  deltaColor = "green", 
  subtitle, 
  subtitleColor = "yellow",
  icon 
}: Props) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs muted">{title}</div>
        {subtitle && (
          <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full bg-${subtitleColor}-500`}></div>
            <span className="text-xs muted">{subtitle}</span>
          </div>
        )}
      </div>
      
      {icon && (
        <div className="text-2xl mb-2">{icon}</div>
      )}
      
      <div className="text-2xl font-semibold mb-1">{value}</div>
      
      {delta && (
        <div className={`text-xs ${
          deltaColor === "green" ? "text-green-300" : "text-red-300"
        }`}>
          {delta}
        </div>
      )}
    </div>
  );
}
