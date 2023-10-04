# Polling System API
* Created a polling system, only API based.
# Features
* Create a question
* Add options to a question
* Add a vote to an option of question
* Delete a question
* Delete an option
* View a question with it’s options and all the votes given to it
# Route Structure
* /question/create (To create a question);
* /question/:id/options/create (To add options to a specific question)
* /question/:id/delete (To delete a question)
* /options/:id/delete (To delete an option)
* /options/:id/add_vote (To increment the count of votes)
* /questions/:id (To view a question and it’s options)
# Directory Structure
  ![File Structre](https://github.com/gauravmjain/Polling_System_API/assets/91288299/303c64d8-3a41-4b32-83d5-d2a00d6be353)
