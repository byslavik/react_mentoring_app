import * as React from 'react';


export  class FilmFilter extends React.Component {

    render() {
        return (<ul>
          <li style={{fontWeight: "bold"}}>Sort By: </li>
          <li><button>by Release Date</button></li>
          <li><button>by Rating</button></li>
      </ul> )
    }
}
