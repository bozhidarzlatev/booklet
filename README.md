# booklet
SoftUni Project Defense - Regular Exam

Please read: App is not 100% done, i didn't manage to implement all the features. Currently it's 23:15 and i am writing you some notes!
State managment is bad, i think i know what is the problem - but don't have the time to deal with it.
As some core functionalities were not implemented i decided to do them instead.
When you are in profile view and refresh the app, detail are missing. I think it is beacaus the BehaviorSubject refreshes and the view get's the info before it can populate again.
I fixed this issue in some places but didn't manage to do it on a globale scale.
Some other menues are missing - i note them with //TO DO - maybe i missed someone, sorry!
Search don't work properlu. I tried to make a dynamic search but when something is typed and deleted it doesnt show you all the books.
No Pagination is implemented.
Also no guards were implemented.
As i said - i have no more time and i preffer to describe my project.
You can read more about the app in booklet-app README

App i based on MEASN Stack and you will need a MongoDB, i didn't provide a database to load.... no time.

00:25 
IMPORTANT - CORS is set to allow request from localhost:4200 - please run Angular app at localhost:4200!!!

To run the app please follow the instructions
Open new terminal:
    -cd rest-api  
    -npm i
    -npm run dev / npm start

Open new terminal 
    - cd booklet-app
    or use cd ../ from the previous dir
    -npm i
    -ng serve




Hi there! My name is Bozhidar Zlatev and this is my project for the Angular Course - oct 2024.
My project is about an online bookstore - booklet, where there should be functionalities / i've i implement them correctly ;) / as:
    * Guest and user views    
    * add or buy books
    * leave comments 
    * add-to cart functionality
    * order history
    * likes
    * Profile page
    * search options
    * and others.

The development is planned to proceed as shown:

        [                      WHAT                ]    [ Planned days ]  [  START DAY ]  [  END DAY  ]   [ Days needed ]  [ Status ]  [ Comments ]

    1 - Set Angular                                       0 days            25.11.2024      25.11.2024       0 days           Done
    2 - Fron-end development -                            2-3 days          25.11.2024      26.11.2024       1 day            Dobe       Core structure is done 
        HTML and CSS set up and different views.                                                                                         Further development on demand   
    3 - Back-end -                                        7 days max        02.12.2024      11.12.2024       not enough    partial done  not enought time
        currently i don't have idea or solution.. ;)         
    4 - Implementing Angular features.                    10 days max       02.12.2024      11.12.2024       not enough    partial done  not enought time



### Seting Angular
    - ng new booklet-app 
    
### Fron-end development - HTML and CSS 
    - Setting Headers HTML and CSS
        - Added Home iceo
        - Added browse and add new buttons
        - Added guest and user buttons
    - Setting Footer HTML and CSS
    - Add custom font - Parkinsans
    - Setting routes - app.routes.ts
    - CSS fixes
    - Add profile and cart icons
    - Add homepage - i used ChatGPT for inspiration, because i have basic knowledge of CSS and HTML and I haven't been through this course in path
    - Add browse all page
    - Add details view component
    - Add details routes 
    - Add details view HTML and CSS
    - Add add books view - again i used ChatGpt for inspiratin. 
        - components
        - Routes
        - HTML & CSS
    - Add login and Register views
        - components
        - Routes
        - HTML & CSS
    - Add dynamic tab title change using RxJS - Router, ActivatedRoute, Title
    - Add Profile page view
        - components
        - Routes
        - HTML & CSS
    - Add 404 page
        - HTML & CSS

### Phase II - implementing Back-end and Angular features.
    - Create rest-api folde
        -npm init
        -npm i - express mongoose bcrypt cookie-parser jsonwebtoken dotenv / --save-d nodemon
        -setting express.js
        -setting mongodb
            -added User model
        -added authentication controller and sercvice
        -added registration functionality    - ######## Needs refinements and error handling!!!
        -added logout funcionality - rest-api and Angular
        -added login funcionality - rest-api and Angular
        -added add new book funcionality - rest-api and Angular
        -added browse all functionality -rest-api and Angular
        -added details functionality -rest-api and Angular
        -added main view fixes
        -added profile view 
        -fixes and header updates
        -added add to cart functionality
        -added place order functionality, view card, view orders page
        -added review and rating functionality 
        -home page improvements - top rated book
        -added form validations
        -added cart count 
        -edit, delete, review buttons view for appropriate users
        -added edit functionality
        -added delete functionality
        -implemented search functionality - need more work!
        -writing a final project description
            