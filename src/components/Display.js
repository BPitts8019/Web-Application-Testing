import React from "react";

function Display ({strikes, balls, fouls, hits}) {
   return (
      <div data-testid="display">
         <h1>Strikes: {strikes}</h1>
         <h1>Balls: {balls}</h1>
         <h1>Fouls: {fouls}</h1>
         <h1>Hits: {hits}</h1>
      </div>
   );
}

export default Display;