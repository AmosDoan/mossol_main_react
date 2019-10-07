import React from 'react';
import {Switch, Route}  from 'react-router-dom';
import Menu from 'components/Menu';
import {OpenCollege, AboutAmos, Home, Start} from 'pages';

const App = () => {
    let priorSessionTable = [];
    for (let i = 0; i < 8; i++) {
        const sessionUrl = "https://mossol.net/session-" + i;
        priorSessionTable.push(sessionUrl);
    }

    console.log(priorSessionTable);

    return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/openCollege" render={
                    (props) =>
                    <OpenCollege {...props} priorSession={priorSessionTable} />
                } />
                <Route exact path="/aboutAmos" component={AboutAmos}/>
                <Route exact path="/start" component={Start}/>
            </Switch>
        </div>
    )
};

export default App;
