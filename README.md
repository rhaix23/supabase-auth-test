# Next.js and Supabase Authentication
This is a test implementation of Supabase authentication using Next.js. 

## Features
- Supabase Auth using Next.js App Router
- Email & Password Authentication
- OAuth Authentication (Google and GitHub)
- Email Verification
- Password Reset via Email

## Setup 
1. Create a new project in Supabase.
2. Enable Email, GitHub, and Google in the Auth Providers.
<img style="margin-top: 1rem;" alt="Supabase auth providers" src="https://res.cloudinary.com/dtyzbmtlz/image/upload/v1707987602/cigucnh7l3cbvamb9acm.png">

3. Setup the SMTP Settings for Email Verification and Password Reset by enabling custom SMTP and filling in the required fields.
<img style="margin-top: 1rem;" alt="SMTP settings" src="https://res.cloudinary.com/dtyzbmtlz/image/upload/v1707987824/fp68m0mimjyfejtvcwyk.png">

4. Clone this repository and create a `.env.local` file in the root directory. Add the following environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```

5. Install the dependencies and run the development server:
```
npm install
npm run dev
```

## Additional Notes
Check the documentation for the up-to-date configurations.
