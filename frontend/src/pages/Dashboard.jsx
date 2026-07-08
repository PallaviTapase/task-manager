function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">
          Task Manager Dashboard
        </h1>
      </nav>

      <div className="p-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold">
            Welcome, Pallavi
          </h2>

          <p className="mt-2">
            Your tasks will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;