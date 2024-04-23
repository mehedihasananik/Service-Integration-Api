import { HiMenuAlt3 } from "react-icons/hi";
import { LuLayoutGrid } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";

export const dashboardMenus = [
  { name: "Dashboard", link: "/dashboard", icon: LuLayoutGrid },
  { name: "Message", link: "/message", icon: FiMessageSquare },
  { name: "New Order", link: "/new-order", icon: HiMenuAlt3 },
  { name: "Manage Order", link: "/manage-order", icon: FiLayers },
  { name: "Order-Delivery", link: "/order-delivery", icon: FiLayers },
];
