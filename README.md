# FreeCodeCamp's Image Search Abstraction Layer
This is the fourth take home projects in FreeCodeCamp's Coding Interview Prep where we have to create an Image Search Abstraction Layer that allows user to search for images related to the query and also see recent searches.

## Live Demo on Repl
https://FreeCodeCamp-Image-Searcher-1.jordyf15.repl.co

## Application Usage
User can search for images related to their search queries and also receive it's alternate text and the page's url of where that image is from.  
  
User can also paginate the search result between 1 and 10 by altering the offset.  
  
User can also see recent searches in this application.  
  
When forking this repository and using the application please pay attention to the port used in backend and the baseUrl for services in the frontend (in here it used 3001). Also create your own `.env` file to store the port and databaseUrl.

## Technologies Used
1. FrontEnd:  
    - axios version ^0.21.0
    - react version ^17.0.1
    - react-dom version ^17.0.1
    - react-scripts version 4.0.1
    - styled-components version ^5.2.1
    - uuid version ^8.3.2
2. BackEnd:  
    - axios version ^0.21.0
    - cors version ^2.8.5
    - dotenv version ^8.2.0
    - express version ^4.17.1
    - mongoose version ^5.11.8

## Project's Users Stories
1. You can get the image URLs, alt text and page URLs for a set of images relating to a given search string.
2. You can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. You can get a list of the most recently submitted search strings.
