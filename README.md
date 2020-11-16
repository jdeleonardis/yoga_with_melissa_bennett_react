# Yoga With Melissa Bennett
![Badge](https://img.shields.io/github/v/release/jdeleonardis/yoga_with_melissa_bennett_react?color=blue&include_prereleases&style=plastic)

## Description

This MERN stack application has been written for a person who teaches yoga to veterans to her specifications. There are several pages available to the class members, including an About, Classes, Resources, and Contact. The Admin page is locked down to the website owner.

The classes page will display at most the next three non-cancelled classes. The user selects the class or classes he or she would like to attend, and enter their name and email address. If the class is cancelled, the owner of the site will enter a message which will automatically be emailed to all members of the particular class that was cancelled.

The contact page allows a class member to contact the site owner through the site.

The admin page is where the majority of the functionality is located. There is a calendar where the site owner (the teacher) can click on open 'slots' to schedule classes. Clicking on a time slot opens a modal that allows the teacher to enter a class name, start and end date and times, the location of the class, as well as a maximum number of participants. Additionally, the teacher can cancel classes here, and enter a custom message that will automatically be emailed to any participants that have signed up for the class. As well as the calendar, there is also an 'location maintenance' section that allows the teacher to enter new locations, and make locations 'inactive', removing them both from her ability to select them when scheduling classes, as well as the react components that appear throughout the site for the user to see.

## Table of Contents

* [Usage](#usage)
* [Technology](#Technology)
* [Images](#Images)
* [Contributors](#Contributors)
* [License](#License)

## Usage
Navigate to the website located at https://yogawithmelissabennett.com. A development version of the site can be located at https://yogawithmelissabennett-dev.herokuapp.com.

## Technology
Other than the usual suspects (HTML, CSS, JavaScript, React), the following libraries are also in use: Bootstrap, React-Bootstrap, React-Big-Calendar, Moment.js, React-datetime-picker, bcrypt, jsonwebtokens, cookie-parser, dotenv. A Mongo database is maintained at Mongo AtlasDB.

## Images

## Contributors
jdeleonardis

## License
MIT