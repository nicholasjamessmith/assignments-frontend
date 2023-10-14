# Assignments - Capstone Project Frontend
Project by: Nicholas Smith
-[Github](https://github.com/nicholasjamessmith/assignments-frontend)
-[Backend README](https://github.com/nicholasjamessmith/assignments-server/blob/main/README.md)
-[Deployed Site](https://assignments-nl06.onrender.com/)
-Technologies used:
  -JavaScript
  -React
  -Render

## Description
Assignments is a digital planner for tracking users' assignments. Users can create, read, update, and delete assignments. Users can view a list of assignments on the home page of the site, and interact iwth each assignment listed by clicking on it. Clicking on an assignment takes users to a page where they can then view that individal assignment's information, update it, or delete the assignment altogether. Updating an assignment requires the user to fill out text forms and click a submit button, triggering the page to reload with the updated information displayed. Deleting a reviiew takes the user back to the home page to an updated list of assignments.

The API call to the backed server to retrieve the app's data was done using the fetch method. A set of actions to handle each type of request --each CRUD function-- was written in the loaders.js file. The function to call the app's data from the server was also implemented in the Index and Show page, where the variable assignments is assigned (sorry) the return of the useLoaderData function.

### Index page mockup

### Show page mockup

### Mobile view mockup