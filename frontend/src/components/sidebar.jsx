function Sidebar() {
  return (
    <div className="w-64 bg-white shadow min-h-screen p-4">
      <h2 className="font-bold text-lg mb-4">
        Menu
      </h2>

      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;