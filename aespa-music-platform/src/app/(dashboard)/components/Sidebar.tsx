"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Workforce", href: "/workforce", icon: "👥", badge: "Trending" },
  { label: "E-commerce", href: "/ecommerce", icon: "🛒" },
  { label: "Logistics", href: "/logistics", icon: "🚚", badge: "Hot" },
  { label: "Reports", href: "/reports", icon: "📈" },
  { label: "Task Board", href: "/tasks", icon: "📋" },
  { label: "Mail", href: "/mail", icon: "📧", badge: "Hot" },
  { label: "File Manager", href: "/files", icon: "📁" },
  { label: "UI Widgets", href: "/widgets", icon: "🧩" },
  { label: "Contacts", href: "/contacts", icon: "👤" },
  { label: "FAQ's", href: "/faq", icon: "❓" },
  { label: "Calendars", href: "/calendar", icon: "📅", hasAdd: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="glass-panel h-screen sticky top-0 w-[240px] hidden lg:flex flex-col gap-2 p-4">
      <div className="flex items-center gap-2 px-2 py-3">
        <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
          <span className="text-white text-sm">≡</span>
        </div>
        <span className="font-semibold">Glossy</span>
      </div>

      <nav className="mt-2 flex-1 overflow-y-auto pr-1">
        <ul className="flex flex-col gap-1">
          {MENU.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    active
                      ? "bg-primary-600 text-white"
                      : "hover:bg-surface-700 text-[#c7cbff]"
                  }`}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-sm flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={`badge ${
                      item.badge === "Trending" ? "badge-trending" : "badge-hot"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {item.hasAdd && (
                    <span className="text-xs">+</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto px-2">
        <div className="text-xs muted">v0.1.0</div>
      </div>
    </aside>
  );
}
