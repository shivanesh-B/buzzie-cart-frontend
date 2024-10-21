
---

# [Buzzie Cart Frontend] https://buzzie-cart-frontend.vercel.app
**Click this to redirect to my WebPage :)**
```markdown
## buzzie-cart-frontend Created by Shivanesh

### To Run this Website:

1. Download both **Frontend** and **Backend** folders.  
2. Edit the following in the `.env` files.

---

### Requirements to Install:

In both **Frontend** and **Backend** folders separately, run:

```bash
npm install
```

Also, install the following dependencies:

```bash
npm i mongoose
npm i mongodb
npm i cloudinary
npm install --save @stripe/react-stripe-js @stripe/stripe-js
npm i jsonwebtoken
npm i react
npm i react-dom
npm i react-router-dom
```

---

### To Run the Frontend:

```bash
npm run dev
```

### To Run the Backend:

```bash
npm run start:dev
```

---

## Frontend `.env` file: (`.env.local`)

```bash
VITE_STRIPE_PK="Your Stripe Publishable Key"
```

Refer to the [Stripe documentation](https://docs.stripe.com/payments?payments=popular) to configure your key.

---

## Backend `.env` file:

1. Create an account on **MongoDB** and create a database.  
2. Copy your **database URL** with your password into `DB_URL`.

### For `JWT_SECRET_KEY`, generate a key by running:

```bash
$ node
> require('crypto').randomBytes(32).toString('hex')
```

This will generate a random key. Paste it into the `JWT_SECRET_KEY` field.

### For `STRIPE_SECRET_KEY`:
- Go to your **Stripe Dashboard** and copy your secret key.

### For **Cloudinary Keys**:
- Create an account on **Cloudinary** and get the following keys:
  - `CLOUDINARY_CLOUD_NAME`
  - `CLOUDINARY_API_KEY`
  - `CLOUDINARY_API_SECRET`

---

## Deployment:

1. Push your project to **GitHub**.  
2. Use **Vercel** to deploy it.

### After deployment:

- In the frontend (`public/src/utils/baseURL.js`), change:

```javascript
export const getBaseUrl = () => {
    return "https://your-backend-url.vercel.app";
};
```

Example:

```javascript
export const getBaseUrl = () => {
    return "https://buzzie-backend-app.vercel.app";
};
```

- In the backend `index.js` file, change **line 17**:

```javascript
origin: 'https://your-frontend-url.vercel.app'
```

Example:

```javascript
origin: 'https://buzzie-cart-frontend.vercel.app';
```
```

---
