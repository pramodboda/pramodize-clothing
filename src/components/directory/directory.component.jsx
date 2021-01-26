import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.sass";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
          id: 1,
          linkUrl:'hats'
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1611121539713-11617fcf6876?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
          id: 2,
          linkUrl:'jackets'
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
          id: 3,
          linkUrl:'sneakers'
        },
        {
          title: "mens",
          imageUrl:
            "https://images.unsplash.com/photo-1561926811-f64405c74398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
          size: "large",
          id: 4,
          linkUrl:'mens'
        },
        {
          title: "womens",
          imageUrl:
          // "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://burst.shopifycdn.com/photos/fashionable-young-woman.jpg?width=1850&format=pjpg&exif=1&iptc=1",
          size: "large",
          id: 5,
          linkUrl:'womens'
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
