# UFOs

## Overview

  This project is a continuation of a previous html that displays a java array of ufo sighting information as a sortable table and allows users to sort table display by ufo sighting date.  To further advance the sorting options, the original javascript  that sorted the java array (**data.js**) was modified to allow users to sort the **data.js** and update the table based on a change to one or a combination of all of the defined search terms.  The search values included in the modification are:
  
  *  **Date - UFO sighting event date**
  *  **City - City of sighting event**
  *  **State - State of sighting event**
  *  **Country - Country of sighting event**
  *  **Shape - Shape of UFO sighted**
  
![image](https://user-images.githubusercontent.com/91850824/155857286-47341312-07ab-4887-938f-cee67b20b46a.png)


### Resources

  1. ***static/js/data.js*** - Holds Java Variable **data**.  **data** holds the infomration in java array for every sighting.
  
  ![image](https://user-images.githubusercontent.com/91850824/155856907-fb036094-b72b-405b-8500-05d5860eb281.png)

  2. ***static/images/nasa.jpg*** - image for html banner.

### Appplications 

  1.  ***index_html*** - controls html text, loads javascript results, and styles results from javascript and java data array.  *Click this to run applications.*
  2.  ***static/css/style.css*** - controls bidy styling and link to **nasa.jpg** and assigns to jumbotron.
  3.  ***static/js/app.js*** - java script application that creates sightings table and enables sorting functionality.

## Results

  To use this project locally, please clone the entire deposit or the html can be accessed in my github_pages.  The entire file structure is needed for the index.html to function properly and to maintain teh desired styling. 
![image](https://user-images.githubusercontent.com/91850824/155857645-3fd8e103-cd59-4baf-a587-ff44ba29a9df.png)

  Once index.html is launched, the text and styling from the html are immdiately visible.  Also, the bottom of the page holds the table generated from **data.js** and **app.js**.  Along the left side the user can see the input boxes for the elements mentioned above (date, city, state, country, and shape) with default example values ('1/10/2010', 'roswell', 'nm', 'us', and 'triangle').
  
  ![image](https://user-images.githubusercontent.com/91850824/155857734-9b048a45-3402-4cb7-8af3-0810dddefd0e.png)

  As values are entered into the user box, the table is sorted to only show sighting records with that value present. (example: entering 1/9/2010 will result in all sightings on that date in the data array to be shown in the table exclusively.  As text is entered into any input box, the value entered and the id associated with the box (example for date: 'id' = datetime, 'value' = '1/9/2010') are saved in a java array filter.  The Console box in the image below shows the console out put for the filter array. 
  
 ![image](https://user-images.githubusercontent.com/91850824/155857841-bda98a97-0eaf-4e20-826b-89de00a95a90.png)

Each input box is assoicated with an "id" that matches the key for each data.js sighting record in within the index.html script.  

![image](https://user-images.githubusercontent.com/91850824/155857992-6809e637-a315-448f-9b42-58e13b86ce36.png)

As the values are inputed, the app.js application recognizes the change with the ***d3.select(this)*** codes inside an **updateFilters** function and the resulting id and value entered are stored into a **filters** variable.  The end of the **updateFilters** function then runs another **filterTable** function that filters the data shown 

![image](https://user-images.githubusercontent.com/91850824/155858039-846b0f04-cf81-415a-b46d-425f6375b941.png)

I am certain that there are many more ways to perform the filtering step; however, in this application, the **filterTable** function initializes by creating variables for each 
input 'id'.  With d3 the datetime and value pair are set to the variables in the html.  Next, the entire data table is saved as a new variable **filterData**.

![image](https://user-images.githubusercontent.com/91850824/155858264-e6e70b0d-fd5e-4f92-9ded-fdc953dc0571.png)

The filters varaible is then looped through and only variables that match keys and values inputted in the html are saved.  Finally, if a saved value is recognized, the filterData is filterd to show data rows that correspond to any comibination of inputs.

![image](https://user-images.githubusercontent.com/91850824/155858342-b19463d4-8f1f-4dfd-866c-7ef193f0acbe.png)

The result is that the table can be changed to any available combination of existing inout datas.  If the combination does not exist, the table will appear blank.  Once all inputs are cleared and enter is pressed, the full data table reemerges.

![image](https://user-images.githubusercontent.com/91850824/155858375-8b580b49-48d6-449f-ab1f-3f69df4044fa.png)

![image](https://user-images.githubusercontent.com/91850824/155858384-53093cfb-79df-4d4a-be30-b2e182a74e87.png)

## Summary

### Drawbacks to webpage

1. Inputs must exactly match text in **data.js**.  This includes capitilzations and date formatting. Example: entering "Benton" instead of "benton" for city will result in a blank table.  Likewise, dates of Jan 1, 2010 will result in blank tables.
2. The user must either play battleship with dates and other inputs or else comb through the entire table to look for values to sort by.

### Suggested improvements

1. There are scripted ways to detect Capitlization and change it to lower case.  Likewise, date formats can be identified and changed after input.
2. Look into adding a drop down box to list availabe sort options.  This would make teh functionality of the table more useful, if the user is looking for teh possibility of a certain event without combing through the list to see what the options are. 





