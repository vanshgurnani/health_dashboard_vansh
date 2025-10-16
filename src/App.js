import React, { useState, useMemo } from 'react';

// Mock Lucide icons (since we cannot import actual libraries in a single file)
const LayoutDashboard = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
const Dumbbell = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.67 12.33a2 2 0 1 1-2.83 2.83L11.5 10.5 9.6 12.4l4.1-4.1-1.9-1.9-4.1 4.1L5.8 8.83a2 2 0 1 1-2.83-2.83L7 3 3 7l2 2 2.83 2.83L11 7l4 4-2.83 2.83L13 15l2 2 2.83 2.83-4.1 4.1L21 17l-4-4-2.83-2.83z"/></svg>;
const Calendar = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
const Target = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const Apple = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.82 20.91c.8-1.55-.83-3.02-2.3-2.35-1.57.65-2.58.5-3.62-.27-1.42-1.05-2.22-3.1-2.22-4.1 0-1.25.98-2.55 2.1-3.1 1.76-.7 3.56-1.12 3.56-1.12s-1.87-1-3.6-1.74c-1.2-.5-2.5-1-2.5-1-1.3-.4-2.7 0-3.9.7-1.3.8-2.2 2-2.2 3.8 0 1.2.6 2.3 1.5 3.1 1.6 1.4 3.7.8 4.7.2 1.5-.7 3.3-1.6 4.7-2.3 0 0 1.2 1 1.5 1.5.7.9.6 2.6-.1 3.4-1.1 1.3-2.9 2.5-5.2 3.2-2 .6-4.2 1.1-6.4 1.1-2.3 0-4.5-.5-6.6-1.5-.8-.4-1.2-1.2-1.2-2.2V6.2c0-1.8 1.4-3.2 3.2-3.2h12.5c1.8 0 3.2 1.4 3.2 3.2v10.5c0 1.8-1.4 3.2-3.2 3.2H5.2c-1.8 0-3.2-1.4-3.2-3.2v-1.1"/></svg>;
const Activity = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>;
const HelpCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;
const LogOut = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const Search = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const Bell = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
const Settings = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const ChevronRight = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const Sun = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>;


// --- Mock Data ---

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Dumbbell, label: 'Workout' },
  { icon: Apple, label: 'Diet Plan' },
  { icon: Target, label: 'Goals' },
  { icon: Calendar, label: 'My Schedule' },
  { icon: Activity, label: 'Progress', sub: true },
];

const activityData = [
  { title: 'Workout', time: '60 mins', color: 'bg-cyan-500', icon: Briefcase },
  { title: 'Calories', time: '1800 kcl', color: 'bg-orange-500', icon: Sun },
  { title: 'Steps', time: '2200 steps', color: 'bg-indigo-500', icon: Activity },
];

const scheduleData = [
  { day: 'Monday', activity: 'Stretch', time: 'At 08:00', sets: '20 Sets', color: 'bg-red-200 text-red-700' },
  { day: 'Tuesday', activity: 'Back Stretch', time: 'At 08:00', sets: '10 Round', color: 'bg-orange-200 text-orange-700' },
  { day: 'Wednesday', activity: 'Yoga', time: 'At 08:00', sets: '20 min', color: 'bg-purple-200 text-purple-700' },
  { day: 'Thursday', activity: 'Gym', time: 'At 10:00', sets: '1 hour', color: 'bg-yellow-200 text-yellow-700' },
];

const goalData = [
  { title: 'ABS & Stretch', date: 'Sunday, April 14 | 08:00 AM', sets: '10 min/day', color: 'bg-green-100 text-green-700' },
  { title: 'Push Up', date: 'Sunday, April 15 | 08:00 AM', sets: '50 sets/day', color: 'bg-pink-100 text-pink-700' },
  { title: 'New Goal', date: 'Sunday, April 16 | 09:00 AM', sets: '15 min/day', color: 'bg-blue-100 text-blue-700' },
];

const chartData = [
  { day: 'Mon', workout: 80, meal: 60, steps: 40 },
  { day: 'Tue', workout: 50, meal: 40, steps: 70 },
  { day: 'Wed', workout: 90, meal: 70, steps: 80 },
  { day: 'Thu', workout: 40, meal: 30, steps: 65 },
  { day: 'Fri', workout: 75, meal: 50, steps: 55 },
  { day: 'Sat', workout: 85, meal: 65, steps: 95 },
  { day: 'Sun', workout: 60, meal: 45, steps: 75 },
  { day: 'New', workout: 70, meal: 55, steps: 85 },
];

const mealTableData = [
  { food: 'Burrito', meal: 'Pizza Burger', calories: 'Receiving', priority: '01:00 AM', carbs: '20 gm' },
  { food: 'Burger', meal: 'Pizza Burger', calories: 'Receiving', priority: '01:00 AM', carbs: '20 gm' },
];

// --- Sub-Components ---

const Sidebar = ({ items }) => (
  <div className="flex-shrink-0 w-64 bg-white border-r border-gray-100 p-6 flex flex-col justify-between hidden lg:flex">
    {/* Top Section */}
    <div>
      <div className="flex items-center text-2xl font-bold text-gray-800 mb-8">
        Fitness <Dumbbell className="w-6 h-6 ml-2 text-orange-500" />
      </div>
      <div className="flex flex-col space-y-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center p-3 rounded-xl cursor-pointer transition-colors ${
              item.active
                ? 'bg-orange-500 text-white font-semibold shadow-lg shadow-orange-200'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-gray-400'}`} />
            <span className="ml-4 text-sm">{item.label}</span>
            {item.sub && <ChevronRight className="w-4 h-4 ml-auto" />}
          </div>
        ))}
      </div>
    </div>
    {/* Bottom Section */}
    <div className="space-y-2">
      <div className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
        <HelpCircle className="w-5 h-5 text-gray-400" />
        <span className="ml-4 text-sm">Help</span>
      </div>
      <div className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer">
        <LogOut className="w-5 h-5 text-gray-400" />
        <span className="ml-4 text-sm">Logout</span>
      </div>
    </div>
  </div>
);

const Header = () => (
  <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white">
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 hidden md:block">Overview</h2>
      <p className="text-sm text-gray-500 mt-1">
        Good Morning <span className="font-medium text-gray-700">Welcome Back!</span>
      </p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative hidden lg:block">
        <input
          type="text"
          placeholder="Search"
          className="w-64 py-2 pl-10 pr-4 text-sm border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition duration-150"
        />
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <Settings className="w-6 h-6 text-gray-500 cursor-pointer hover:text-orange-500 transition-colors hidden sm:block" />
      <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-orange-500 transition-colors hidden sm:block" />
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden cursor-pointer">
        {/* Placeholder for Profile Image */}
        <img
          src="https://placehold.co/40x40/9CA3AF/ffffff?text=U"
          alt="User Avatar"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
);

const ActivityCard = ({ title, time, color, icon: Icon }) => (
  <div className={`p-6 rounded-3xl text-white shadow-lg flex flex-col justify-between min-h-[140px] ${color}`}>
    <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center mb-3">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold">{time}</span>
      <span className="text-sm opacity-90">{title}</span>
    </div>
  </div>
);

const ProgressChart = ({ data }) => {
  const maxVal = 100;

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md col-span-full xl:col-span-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Goal Progress</h3>
        <select className="text-sm border border-gray-200 rounded-xl px-3 py-1.5 focus:ring-orange-500 focus:border-orange-500">
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart Area */}
      <div className="flex justify-between h-64 border-b border-gray-200 pb-2 relative">
        {/* Y-Axis labels (Mocked) */}
        <div className="absolute left-0 bottom-0 top-0 w-8 flex flex-col justify-between text-xs text-gray-500 -translate-x-full pr-2">
          <span>100%</span>
          <span>80%</span>
          <span>60%</span>
          <span>40%</span>
          <span>20%</span>
          <span>0%</span>
        </div>

        {data.map((item) => (
          <div key={item.day} className="flex flex-col items-center flex-1 mx-1">
            <div className="flex items-end h-full w-full">
              {/* Bar 1: Workout */}
              <div
                className="w-1/3 bg-orange-400 rounded-t-lg mx-[1px] transition-all duration-500"
                style={{ height: `${(item.workout / maxVal) * 100}%` }}
              />
              {/* Bar 2: Meal */}
              <div
                className="w-1/3 bg-cyan-400 rounded-t-lg mx-[1px] transition-all duration-500"
                style={{ height: `${(item.meal / maxVal) * 100}%` }}
              />
              {/* Bar 3: Steps */}
              <div
                className="w-1/3 bg-purple-400 rounded-t-lg mx-[1px] transition-all duration-500"
                style={{ height: `${(item.steps / maxVal) * 100}%` }}
              />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-600">{item.day}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-6 mt-6 text-sm">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-orange-400 rounded-full mr-2" />
          Workout
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
          Meal
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
          Steps
        </div>
      </div>
    </div>
  );
};

const MealTable = ({ data }) => (
  <div className="bg-white p-6 rounded-3xl shadow-md col-span-full xl:col-span-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Food</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-gray-500 text-left text-sm font-medium">
            <th className="px-3 py-3">Food</th>
            <th className="px-3 py-3">Meal</th>
            <th className="px-3 py-3">Calories</th>
            <th className="px-3 py-3">Priorities</th>
            <th className="px-3 py-3">Carbs</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-gray-700">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-3 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                    🍕
                  </div>
                  <span>{item.food}</span>
                </div>
              </td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">{item.meal}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">{item.calories}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">{item.priority}</td>
              <td className="px-3 py-4 whitespace-nowrap text-sm">{item.carbs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ScheduleItem = ({ day, activity, time, sets, color }) => (
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-gray-800 mb-1">{day}</h4>
    <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          <Dumbbell className="w-4 h-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">{activity}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">
        {sets}
      </span>
    </div>
  </div>
);

const GoalItem = ({ title, date, sets, color }) => (
  <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
    <div className="flex items-center space-x-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Target className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{date}</p>
      </div>
    </div>
    <span className="text-xs font-semibold px-2 py-1 rounded-full border border-gray-300 text-gray-600">
      {sets}
    </span>
  </div>
);

const RightPanel = ({ schedule, goals }) => (
  <div className="space-y-6 col-span-full xl:col-span-4">
    {/* My Schedule */}
    <div className="bg-white p-6 rounded-3xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">My Schedule</h3>
        <span className="text-xs text-orange-500 font-medium flex items-center cursor-pointer hover:underline">
          View All <ChevronRight className="w-3 h-3 ml-0.5" />
        </span>
      </div>
      <div className="divide-y divide-gray-100">
        {schedule.map((item, index) => (
          <ScheduleItem key={index} {...item} />
        ))}
      </div>
    </div>

    {/* Goals */}
    <div className="bg-white p-6 rounded-3xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Goals</h3>
        <span className="text-xs text-orange-500 font-medium flex items-center cursor-pointer hover:underline">
          View All <ChevronRight className="w-3 h-3 ml-0.5" />
        </span>
      </div>
      {goals.map((item, index) => (
        <GoalItem key={index} {...item} />
      ))}
    </div>

    {/* Premium Membership Ad */}
    <div className="bg-white p-6 rounded-3xl shadow-lg relative overflow-hidden bg-purple-50">
      <h4 className="text-lg font-bold text-purple-800 mb-2">50% off on Premium Membership</h4>
      <p className="text-sm text-purple-600 mb-4">
        Upgrade, and enjoy unlimited access to our special content.
      </p>
      <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-300 hover:bg-orange-600 transition-colors">
        Upgrade
      </button>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-70">
        {/* Placeholder image for ad */}
        <img
          src="https://placehold.co/128x128/9CA3AF/ffffff?text=AD"
          alt="Ad Visual"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex font-[Inter]">
      <Sidebar items={navItems} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        {/* Main Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="flex flex-col xl:flex-row gap-6">
            
            {/* Left/Center Content Area */}
            <div className="flex-1 space-y-6">
              
              {/* Top Banner */}
              <div className="bg-orange-500 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 max-w-lg">
                  <h3 className="text-2xl font-bold mb-3">Track Your Daily Activities</h3>
                  <p className="text-sm opacity-90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
                {/* Banner Image Placeholder */}
                <img
                  src="https://placehold.co/300x150/f97316/ffffff?text=FITNESS+MODEL"
                  alt="Fitness activity visual"
                  className="absolute right-0 top-0 h-full object-cover rounded-3xl opacity-80"
                  style={{ width: '40%' }}
                  onError={(e) => {
                    e.target.onerror = null; // prevents infinite loop
                    e.target.src = 'https://placehold.co/300x150/f97316/ffffff?text=FITNESS+MODEL'; // fallback
                  }}
                />
              </div>

              {/* Activity Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activityData.map((card, index) => (
                  <ActivityCard key={index} {...card} />
                ))}
              </div>

              {/* Progress Chart and Meal Table - Nested Grid */}
              <div className="grid grid-cols-1 gap-6">
                <ProgressChart data={chartData} />
                <MealTable data={mealTableData} />
              </div>
            </div>

            {/* Right Panel Area (Schedule, Goals, Ad) */}
            <RightPanel schedule={scheduleData} goals={goalData} />
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
