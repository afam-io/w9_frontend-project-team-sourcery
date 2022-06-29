Likes Button Plan -

Goal: create a button for each resource item that when pressed updates the number of upvotes
To do this I need to:

- add a button to each resourceItem (done)
- ~~change state in app so that it accepts an upvotes option~~
  - doesn't need to be done given states set up
- connect that button to state

- given that the state is fetched from the backend on load I will need to edit the backend to accept a likes column.

Do this by updating

- the create and seed table scripts
- the add to resources script (in models) (for the post request)

- Update the input components state to hold a likes property.

  - so that when an item is created it sends likes of 0 to the DB

- Create an onClick function in app that will update resources state each time the likes button is clicked

Get a working put statement

- Create a working put statement in my db
-

Questions

- should this be its own component
- to what extent should I just rely on libraries for this sort of thing
