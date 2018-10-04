// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import AccountBalance from "@material-ui/icons/AccountBalance";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Settings from "@material-ui/icons/Settings";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Banks",
    navbarName: "Banks",
    icon: AccountBalance,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Partitions",
    navbarName: "Partitions",
    icon: AssignmentInd,
    component: TableList
  },
  {
    path: "/icons",
    sidebarName: "Insights",
    navbarName: "Insights",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/typography",
    sidebarName: "Settings",
    navbarName: "Settings",
    icon: Settings,
    component: Typography
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
