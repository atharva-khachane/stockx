import React, { useState } from "react";
import { watchlist } from "../data/data";
import {Tooltip, Grow} from "@mui/material";
import {
    KeyboardArrowDown, 
    KeyboardArrowUp,
    MoreVert as MoreVertIcon,
    Timeline as TimelineIcon
} from "@mui/icons-material";

const WatchListActions = ({uid}) => {
    return(
      <span className="actions">
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <TimelineIcon className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreVertIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    )
};


const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);
  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  };
  const handleMouseLeave = () => {
    setShowWatchListActions(false);
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info"> 
            <span>{stock.price.toFixed(2)}</span>
            {stock.isDown?
            (
              <KeyboardArrowDown className={stock.isDown ? "down" : "up"} />
            ):(
              <KeyboardArrowUp className={stock.isDown ? "down" : "up"} />
            )}
            <span className={stock.isDown ? "down" : "up"}>{stock.percent}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.index} />}
    </li>
  );
};

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem key={index} stock={stock} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;
