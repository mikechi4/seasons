

## Key Takeaways
This project will get user's location, using the javascript geolocation api, and based on where they are it will render specific text and icon. If it's summer, load icons with the sun and text about summer. If it's winter we do the same.

This module introduced me to lifecycle methods and class based components. I was able to see how we can handle conditional rendering in React and how we use state to to handle data that's passed along components. I was also able to see the power of class based components and handling state as well as lifecycle methods. All stuff I'd read before but finally put into practice.

Also learned some best practices based on what the community says such as:
  - using componentDidMount() to handle data loading instead of loading data when initializing state
  - best to use a helper method to handle conditional rendering instead of having multiple return statements in render function
  - modularize everything!! pretty obvious - but I didn't think to even create a componenet for that will handle "Loading.." text on the UI
