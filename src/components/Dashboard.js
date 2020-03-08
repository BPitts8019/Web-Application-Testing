import React from "react";

function Dashboard ({handleStrikes, handleBalls, handleFouls, handleHits}) {
   return (
      <div data-testid="dashboard">
         <button onClick={handleStrikes}>Strike</button>
         <button onClick={handleBalls}>Ball</button>
         <button onClick={handleFouls}>Foul</button>
         <button onClick={handleHits}>Hit</button>
      </div>
   );
}

export default Dashboard;