 # https://buzzie-cart-frontend.vercel.app <-- Click this to redirect to my WebPage
 # buzzie-cart-frontend Created by shivanesh

To Run this website, Download both Frontend and Backend folder Then edit the following in ".env" file

Requirements to install:
npm install (install seperatly in both frontend and backend folder)
npm i mongoose
npm i mongodb
npm i cloudinary
npm install --save @stripe/react-stripe-js @stripe/stripe-js
npm i jsonwebtoken
npm i react
npm i react-dom
npm i react-router-dom

To run the Frontend: npm run dev
To run the Backend: npm run start:dev

## Frontend .env file: (.env.local)

VITE_STRIPE_PK="Here you need to configure your own stripe Publishable key"

Refer Stripe docs : https://docs.stripe.com/payments?payments=popular

## Backend .env file:

then create account in mangoDB and create a database. then copy paste your database URL with you password in DB_URL

Then for "JWT_SECRET_KEY" run the below code
$ node
> require('crypto').randomBytes(32).toString('hex')
some random key will generate. paste it in the JWT_SECRET_KEY section

for STRIPE_SECRET_KEY, just go to strip dashboard and copy paste your seceret key

CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
for these above keys, create a account in cloudinary and get those api keys and cloud name.

push your project in github then use vercel website to deploy it

after deploying it in frontend public/src/utils/baseURL.js --> change return "tour website homepage webaddress" for example 

export const getBaseUrl = () => {
    return "https://buzzie-backend-app.vercel.app";
}
the above BaseURL.js is mine...my webaddress is mentioned

In index.js from backend folder chnge the 17th line: origin: 'https://buzzie-cart-frontend.vercel.app' ...with your webaddress

