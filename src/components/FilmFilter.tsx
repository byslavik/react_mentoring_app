import * as React from 'react';


export  class FilmFilter extends React.Component<any> {

    render() {
        return (<ul>
          <li style={{fontWeight: "bold"}}>Sort By: </li>
          <li><a href="javascript:void(0)">by Release Date</a></li>
          <li><a href="javascript:void(0)">by Rating</a></li>
      </ul> )
    }
}
