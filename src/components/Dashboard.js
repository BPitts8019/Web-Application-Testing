import React from "react";

function Dashboard ({increaseStrikes}) {
   return (
      <div data-testid="dashboard">
         <button onClick={increaseStrikes}>Strike</button>
         <button>Ball</button>
         <button>Foul</button>
         <button>Hit</button>
      </div>
   );
}

export default Dashboard;