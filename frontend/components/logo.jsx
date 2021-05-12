import React from 'react';
import {withRouter} from 'react-router';

const Logo = ({router}) => (
    <div className='logo' onClick={() => router.push("/")}>
        <div>
            <div id="van-gogh">van Gogh &amp; co</div>
        </div>
    </div>
)

export default withRouter(Logo)