import React from "react";

import withAuth from "@/hoc/withAuth";

function Dashboard() {
  return (
    <div>
      <span>Welcome to Dashboard</span>
    </div>
  );
}

export default withAuth(Dashboard);
