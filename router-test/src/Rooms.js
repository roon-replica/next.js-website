import React from "react";
import { Routes, Route, Link } from 'react-router-dom'

function Rooms({ match }) {
    return (
        <div>
            <h2>this is rooms page</h2>

            <Link to={`${match.url}/blueRoom`}> this is blue room</Link> <br />
            <Link to={`${match.url}/greenRoom`}> this is green room</Link> <br />
            <Routes>
                <Route path={`${match.url}/:roomId`} element={<Room />} />
                <Route exact path={match.url} render={() => <h3>choose room</h3>} />
            </Routes>
        </div>
    );
}

export default Rooms;

function Room({ match }) {
    return <h2>{`${match.params.roomId} 방을 선택했다`}</h2>
}