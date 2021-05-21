import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

const Logo = ({ router }) => (
    <Link to={"/"} className={"van-gogh"}>
        van <b>Gogh</b> &amp; co
    </Link>
);

export default withRouter(Logo)