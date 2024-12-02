# booklet
SoftUni Project Defense - Regular Exam

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
    3 - Back-end -                                        7 days max        02.12.2024  
        currently i don't have idea or solution.. ;)         
    4 - Implementing Angular features.                    10 days max       02.12.2024              



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
        