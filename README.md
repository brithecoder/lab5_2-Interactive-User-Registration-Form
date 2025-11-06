
To use form Go into  /interactive-registration-form folder and run the index.html file in live server. This form features local storage, HTML and custom javascript form validation. 


## Reflection Questions


### How did event.preventDefault() help in handling form submission?

The event.preventDefault() helps by making sure the form doesn't refresh while submitting. This is useful because while creating you have to do a lot of testing. 

### What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

You can use HTML validation inline by saying that the input is required.You most likely need both javascript and HTML validation so the user experience can be guiding into the right direction.You would want the data to be correctly formatted in the backend to avoid problems so try to nip them in the bud in the front end.


### Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I saved my user information in an object in the and then use JSON stringify and parse to retrieve them. I dont think you should store passwords in the local storage or be careful about it. 

### Describe a challenge you faced in implementing the real-time validation and how you solved it.
A problem I faced was a bug with the confirm password field, I had a problem with the form being submitted if the password was incorrect during the confirmation stage I fixed this problem by making sure the final validation included making sure that the confirm password input matched the password input.

### How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
I made sure user input was displayed at the right times by testing out the form multiple times for my self with different information. 
