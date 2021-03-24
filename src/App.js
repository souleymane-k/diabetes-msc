import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MonthList from './Month/MonthList';
import BackButtonPage from './BackButtonPage/BackButtonPage';
import CommentList from './Comment/CommentList';
import dummyStore from './dummy-store'
// import {API_ENDPOINT} from './config';
import {getCommentsForMonth, findComment, findMonth} from './MonthCommentHelper';
import './App.css';
import GeneralCommentPage from './GeneralCommentPage/GeneralCommentPage';
import AddMonth from './AddMonth/AddMonth';



class App extends Component {
    state = {
        months: [],
        comments: []
    };

    componentDidMount() {
       setTimeout(()=>this.setState(dummyStore), 3000)
    

        // fetch(`${API_ENDPOINT}/months`).then((response) => response.json()).then((json)=> this.setState({months: json}))
        // fetch(`${API_ENDPOINT}/comments`).then((response) => response.json()).then((json)=> this.setState({comments:json}))
   
    }

    renderNavRoutes() {
        const {comments, months} = this.state;
        return (
            <>
                {['/', '/month/:monthId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => (
                            <MonthList
                                months={months}
                                comments={comments}
                                {...routeProps}
                            />
                        )}
                    />
                ))}
                <Route path="/add-month" component={AddMonth} />
                <Route
                    path="/comment/:commentId"
                    render={routeProps => {
                        const {commentId} = routeProps.match.params;
                        const comment = findComment(comments, commentId) || {};
                        const month = findMonth(months, comment.monthId);
                        return <BackButtonPage {...routeProps} month={month} />;
                    }}
                />
                {/* <Route path="/add-month" component={BackButtonPage} /> */}
                {/* <Route path="/add-comment" component={BackButtonPage} /> */}
            </>
        );
    }

    renderMainRoutes() {
        const {comments, months} = this.state;
        return (
            <>
                {['/', '/month/:monthId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => {
                            const {monthId} = routeProps.match.params;
                            const commentsForMonth = getCommentsForMonth(
                                comments,
                                monthId
                            );
                            return (
                                <CommentList
                                    {...routeProps}
                                    comments={commentsForMonth}
                                />
                            );
                        }}
                    />
                ))}
                 <Route
                    path="/comment/:commentId"
                    render={routeProps => {
                        const {commentId} = routeProps.match.params;
                        const comment = findComment(comments, commentId);
                        return <GeneralCommentPage {...routeProps} comment={comment} />;
                    }} 
                 /> 
            </>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <h1>
                        <Link to="/">Diabetes Managing System</Link>{' '}
                       </h1>
                    <nav className="App__nav">
                       <h3>
                        <Link to="/LoginForm">Log IN</Link>{' '}
                        </h3>
                       <h3>
                        <Link to="/RegistrationForm">Sign Up</Link>{' '}
                       </h3>
                    </nav>
                </header>
                <main className="App__main">
                    {this.renderNavRoutes()}
                    {this.renderMainRoutes()} 
              </main>
            </div>
        );
    }
}

export default App;












// fetch(`${API_ENDPOINT}/months`)
    // fetch(`${API_ENDPOINT}/comments`)
