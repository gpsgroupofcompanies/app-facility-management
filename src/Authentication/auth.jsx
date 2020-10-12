import React from 'react';
import { withRouter } from 'react-router';
export default function requireAuth(Component) {
    class AuthenticatedComponent extends React.Component {

        componentDidMount() {
            this.checkAuth();
        }
        checkAuth() {
            const isAuthenticated = true;
            // const isAuthenticated = JSON.parse(localStorage.getItem('access_token'));
            if (!isAuthenticated) {
                this.props.history.push(`/login`);
            }
        }
        render() {
            const isAuthenticated = true;
            // const isAuthenticated = JSON.parse(localStorage.getItem('access_token'));
            return isAuthenticated ? <Component {...this.props} /> : null;
        }
    }
    return withRouter(AuthenticatedComponent)
}