const INITIAL_STATE = {
    sections: [
        {
          title: "hats",
          imageUrl:
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
          id: 1,
          linkUrl:'shop/hats'
        },
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1611121539713-11617fcf6876?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
          id: 2,
          linkUrl:'shop/jackets'
        },
        {
          title: "sneakers",
          imageUrl:
            "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
          id: 3,
          linkUrl:'shop/sneakers'
        },
        {
          title: "men",
          imageUrl:
            "https://images.unsplash.com/photo-1561926811-f64405c74398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
          size: "large",
          id: 4,
          linkUrl:'shop/men'
        },
        {
          title: "women",
          imageUrl:
          // "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://burst.shopifycdn.com/photos/fashionable-young-woman.jpg?width=1850&format=pjpg&exif=1&iptc=1",
          size: "large",
          id: 5,
          linkUrl:'shop/women'
        },
      ]
};


const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export default directoryReducer;