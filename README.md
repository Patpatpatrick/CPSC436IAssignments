# CPSC436IAssignments
Personal Assignments for CPSC436I

## Assignment 1

Assignment 1 is consist of two pages:
- Home Page where you can:
    - add a message to the list
    - clear a specific message
    - clear all the messages
    - clear an unsubmitted message
- About me page where there is a slider to display some of my pictures

How my implementation is in compliance with the assignment requirements

1. An HTML file that loads a CSS file and a JS file
    [index.html](/html/index.html) links [assignment1.js](/js/assignment1.js) and [style.css](/css/style.css)

2. A navbar (should have functioning links to at least a home page (the main page where your message list is), and an about page (brief information about yourself, the project, etc.))
    Yes, there is a navbar on top of [index.html](/html/index.html).

3. A form with some kind of text input or textarea, to write out a message, as well as a button to add the message to a list, and a button to clear the form
    Yes, there is a div to the right of the index page, in the div there is a form where you can submit messages.

4. A stringified JSON object that holds initial messages (should be pre-filled with messages so that there are messages in the list when the site loads ... and you can parse it into an object) ... this is a string!
    Yes, I used form.querySelectorAll() to return a nodeList representing a list of the document's elements that match the specified group of selectors. Then the returned value is an array that contains attribute name and value, I then stringify this object.

5. A list (likely unordered), made up of list items that contain the message text (it should be updated with the new message whenever you click the add button)
    A table will display the whole list. By clicking submit button, a stringified json object will be created. Then parse this string into json obj, then create a tr element based on this json obj, then append it to the table to display it.

6. A button to clear the list of messages
    Use deleteRow function to realize this feature

7. Sufficient styling (showing some effort to upgrade the site from basic HTML), which may include things like:
        ○ Text color
        ○ Background color
        ○ Different positioning
        ○ Sizing (width, height), padding, margins
        ○ Etc.
    Yes.

8. Cool thing that I introduce:
    -Clear a particular message
    -Drop box that represent message type
    -Can automatically add time wrt a message
    -A slider in About Me page.