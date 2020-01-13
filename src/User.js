import React, { Component } from 'react';

class User extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.user !== nextProps.user;
    }
    render() {
        const { user: { username } } = this.props;
        console.log('%s 가 렌러딩 되고 있습니다.', username);

        return(
            <div>
                {username}
            </div>
        );
    }
}

export default User;