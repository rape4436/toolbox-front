import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeScreen } from '../components/auth/HomeScreen';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div>
                <Switch>
                    <Route
                        exact
                        path="/auth/home"
                        component={HomeScreen}
                    />
                </Switch>
            </div>

        </div>
    )
}
