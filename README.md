<div align="center">
<h1 align="center">🥤 Galhardo APP 2.0 💵</h1>
<small align="center">A Simple Web App Project for Lifetime Learning</small>
</div>

## WHY THIS PROJECT ?
   - <b>"Talk is cheap. Show me the code." - Linus Torvalds</b>
   - First Commit: August 02, 2021
   - I started this project using pure JavaScript and Common Modules to learn the basics about NodeJS ecosystem and back-end development
   - You can se the archived 1.0 version repository here: https://github.com/AlexGalhardo/Galhardo-APP-FirstVersion

## LIVE DEMO
- **Currently Version: ALPHA**
- You can access: https://galhardoapp.com/
- This live demo use "main" branch and are deployed in Heroku
- Test User (you can use this default inputs already in login form to login)
   - email: test@gmail.com
   - password: test123
- **IMPORTANT:**
   - **All transactions in this live demo are made in a SANDBOX Environment**
   - **NO REAL Money Transactions will be made**

## INTRODUCTION
### I created this project to LEARN and PRACTICE in my spare time:
- JavaScript, JSON, NodeJS, Express, NPM, TypeScript, DOM, Git, Bootstrap5
- How to document a software (README.md and API)
- Cookies Privacy
   - LGPD (http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm)
   - GPDR (https://gdpr-info.eu/)
- NGINX
   - Reverse-Proxy, Load Balancing, Cache, Response Compression
- DevOps
   - CI/CD using GithubActions, Docker, Kubernetes, Heroku, and AWS
- DataBases
   - Postgres, Redis and MongoDB using PrismaORM with Migrations and Seeders
- Payments
   - [Stripe](https://stripe.com/docs/api)
   - Subscription, Ecommerce, Shop Checkouts
   - ZipCode for Shipping Address, Fee and Deadline
- Uploads Files
   - AWS S3 for Profile Avatars, Blog and Recommendations Images
- Testing
   - Unit, Integration, Performance Tests
- Software Engineering best practices
   - MVC, 12Factor APP, ESLint, Prettier, Design Patterns, SOLID, etc
- SEO
   - Google Tools, SocialMedia MetaTags, CDN, Analytics, Search Console, Sitemap, Robots.txt, etc
- Logs, Observability and Monitoring
   - Console, files, telegram, etc
- Security
   - OWASP, CSRF, XSS, Injection, CORS, HTTP Headers, Google Captcha, etc
- API
   - REST, GraphQL, JWT, Oauth2, AJAX, Bearer Token, HTML Documentation, etc
- Others usefull things
   - Mobile First, WebHooks, Regex, SMTP, Flash Messages, Pagination, Slug, UUID, Searches, etc

- <b>The goal is to be refactoring it over the years during my professional career as I develop my programming/technical skills.</b>
## APP FEATURES
- Authentication (Login, SignUp, Recover Password, Resend Confirm Email Link)
- Simple Ecommerce (Checkout, ShopCart, Stockout, Stripe Checkout)
- Simple Subscriptions (Like a software as a service)
- Blog
- Contact Form (SMTP using HTML templates)
- Cookies privacy
- Recomendations using AJAX requests
- API REST and GraphQL, with a HTML documentation
- Newsletter
- ADMIN ACL and CRUDs
## MICROSERVICES
- https://galhardo-correios.herokuapp.com/cep/13560290 (zipcode here)
   - To GET ZipCode/CEP Information (Correios BRAZIL)
- https://galhardo-correios.herokuapp.com/shipping/13560290 (zipcode here)
   - To GET Shipping Deadline and Fee (Correios BRAZIL)
## FOLDERS
- dist/
   - build of the project when its ready to go in production
- prisma/
   - prisma ORM configurations, migrations, seeds, etc
- .github/
   - github workflow CI/CD configuration
- src/
   - source code of the project
   - views/
      - emails: SMTP Emails requests
      - partials: used in pages
      - pages: main html pages responses
   - tests/
      - unit and integration automatic tests using jest
      - this folder don't need to go to production, used in development
   - routes/
      - all routes/endpoints used in app
   - public/
      - css, scripts, images, uploads, robots.txt, sitemap.xml public access
   - models/
      - all models/services from databases
   - graphql/
      - all things relationed to graphql api
   - tmp/
      - temporary locally uploaded files
   - helpers/
      - usefull code snippets, functions, classes used in app
   - controllers/
      - all the controllers used in app
   - config/
      - important app configs

## GIT BRANCHS
- <b>main</b>: branch to deploy in production
- <b>canary</b>: branch to test latest updates before merge to master
- <b>development</b>: branch to develop/refactor new features

## GIT COMMITS SEMANTIC
- chore: add new chore in this commit
- docs: add new documentation in this commit
- feat: add new feature/update in this commit
- fix: fix some bug or error in this commit
- refactor: refactor code logic in this commit
- style: improve code quality in this commit
- test: improve testing/tests in this commit

## HOW TO INSTALL LOCALLY USING DOCKER
- $ git clone https://github.com/AlexGalhardo/Galhardo-APP
- $ cd Galhardo-APP/
- $ cp .env-example .env
   - Edit .env file with your credentials
- $ npm install
- $ sudo docker-compose up -d
- See the IP Address of galhardoapp_pg docker container using:
   - $ sudo docker inspect galhardoapp_pg
   - Copy the IP Address (example "IPAddress": "172.26.0.3") from container and edit PG_DATABASE_URL host with this ip
- Run Prisma Migration and Seeders:
   - $ npm run migrate
- $ npm run dev
   - Go to: http://localhost:3000/

## HOW TO DEPLOY THIS PROJECT
- $ npm run build
- HEROKU
   - Tutorial In development
- DIGITAL OCEAN
   - Tutorial In development

## DATABASE
- There are useful PrismaORM commands in README.md inside prisma/ folder
- After installing locally, you can see/use databases in:
   - ADMINER
      - http://localhost:8080
      - system: postgresql
      - server: galhardoapp_postgres
      - username: postgres
      - password: root
   - PRISMA STUDIO
      - $ npx prisma studio
      - http://localhost:5555/

## FRONT-END
- Using Bootstrap5 and ReactJS mostly in a MVC structure
- <b>Front-end development is not my specialty</b>

## EMAILS
- Using NodeMailer and MailTrap SMTP, with HTML templates
## UPLOADS
- This project can make images (png, gifs, jpeg) uploads locally and in AWS S3
## APIs
- This project uses 2 types of API:
   - REST
   - Graphql using ApolloServer
- You can see Graphql ApolloServer Studio in: http://localhost:4000/
- API HTML documentation in development
- REQUESTS:
   - Insomnia: you can use <b>galhardoapp-insomnia-requests.json</b> file
   - Postman: you can use <b>galhardoapp-postman-requests.json</b> file

## PAYMENTS
- This project use Stripe Payment API to make credit card transactions
- You can generate a SANDBOX Stripe API key in their site
## LOGS, MONITORING AND OBSERVABILITY
- This project uses 5 types of logs:
   - Winston => log important events in a static file inside ./src/logs/winston.log
   - Morgan => log http status code >= 400 errors
   - Telegram  => for email contacts, shop and plans transactions, and important ADMIN things
   - [DataDog](https://www.datadoghq.com/) => for production analysis
   - [Sentry.io](https://sentry.io/) => por production analysis

## SOME PROJECT IMAGES
### HOME
![home_1](https://user-images.githubusercontent.com/19540357/149237559-affdbb69-1db7-4e0a-9392-479e173a2f34.png)
![home_2](https://user-images.githubusercontent.com/19540357/149237549-fb2b9fa3-ec82-4545-952b-93958db3d20c.png)
![home_3](https://user-images.githubusercontent.com/19540357/149237520-0c817b51-a883-4cc9-b1b8-8b95806c2c0b.png)
![tv_shows](https://user-images.githubusercontent.com/19540357/149237522-ed34b3e9-3b96-49ae-805d-6e9ff0fbc79a.png)
![update_game](https://user-images.githubusercontent.com/19540357/149237504-db369e42-2d30-448b-a157-e9db876d748b.png)

### SHOP
![shop_1](https://user-images.githubusercontent.com/19540357/149237544-38e16332-9cab-4077-8fcb-623313c51103.png)
![shop_2](https://user-images.githubusercontent.com/19540357/149237535-ee3b59ac-9b0c-4929-bbb8-898c865293c3.png)
![shop_3](https://user-images.githubusercontent.com/19540357/149237529-c8e230fd-6b3d-4410-9973-3743349d222d.png)
![shop_4](https://user-images.githubusercontent.com/19540357/149237509-c45b509c-c8dd-4383-96ad-61d50eabe8d8.png)
![shop_5](https://user-images.githubusercontent.com/19540357/149237516-0d8f1b4c-70b8-4678-b527-67d8628e6fb8.png)

### SUBSCRIPTIONS
![plans_1](https://user-images.githubusercontent.com/19540357/149237558-b8baa38a-9604-4ad5-93c3-d511ebf1a1f3.png)
![plan_2](https://user-images.githubusercontent.com/19540357/149237537-aea0ab9f-b763-4d51-a8b0-8bd4102b2e4d.png)
![plan_3](https://user-images.githubusercontent.com/19540357/149237530-747e3c02-301b-4c12-bb8f-b96ee1b50ed1.png)
![plan_4](https://user-images.githubusercontent.com/19540357/149237525-24b2952c-c5d1-4d89-8d25-da6b57dbe0b1.png)

### AUTHENTICATION
![login_1](https://user-images.githubusercontent.com/19540357/149237555-e6f6c5fd-2ddd-44b1-92cb-d8c9a5328a3d.png)
![login_2](https://user-images.githubusercontent.com/19540357/149237548-2191cee6-de83-4461-b1e3-aa1e92388fc4.png)
![register_1](https://user-images.githubusercontent.com/19540357/149237518-a13fbdd3-46eb-4825-9b3f-f045667e5b2d.png)
![register_2](https://user-images.githubusercontent.com/19540357/149237554-36e2803f-f391-44e6-be2f-a7a3ff37da94.png)
![confirm_email_link](https://user-images.githubusercontent.com/19540357/149237536-b422ab82-46c5-453f-b948-43e423387663.png)
![forget_password_1](https://user-images.githubusercontent.com/19540357/149237545-8cfa8d2d-654c-41b5-a037-f4f349144a64.png)

### PRISMA STUDIO
![prisma_studio](https://user-images.githubusercontent.com/19540357/149237494-e37d20a2-4f3a-4cc9-a419-7d1b29b66727.png)

### PROFILE
![profile](https://user-images.githubusercontent.com/19540357/149575662-dcc8b032-6ffe-4e9b-b99c-0c7067220be3.png)
### CONTACT
![contact_1](https://user-images.githubusercontent.com/19540357/149237514-3aff612a-2341-4173-8936-fb761641761b.png)
![contact_2](https://user-images.githubusercontent.com/19540357/149237557-eeea744b-f225-4469-941c-115232b43ebb.png)

### BLOG
![blog_1](https://user-images.githubusercontent.com/19540357/149237543-205f72e4-a7e5-49ee-9bd5-bed8300b3b11.png)
![blog_2](https://user-images.githubusercontent.com/19540357/149237532-220e58fc-0978-4dde-9018-ffc5f856f8a9.png)
![blog_3](https://user-images.githubusercontent.com/19540357/149237528-72e6db23-b29c-4b33-bdc2-ba212f5c2fa9.png)
## FEEDBACKS
- If you have any feedback or improvements tips about this project, send a pull request or send me a email at: aleexgvieira@gmail.com
- I really apreciate good feedbacks

## LICENSE

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present, Alex Galhardo
