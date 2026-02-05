
1. Install dependecies `npm install`
2. Clone .env.template, rename to .env and configure it
3. Start up docker `docker compose up -d`
5. Install prisma
4. Run spplication `npm run dev`


#Install prisma
1. `npm install prisma @types/node @types/pg --save-dev`
2. `npx prisma init --datasource-provider postgresql`
3. Config batabase_url and create models
4. `npx prisma migrate dev --name init`
5. `npm install @prisma/client @prisma/adapter-pg pg dotenv`
6. `npx prisma generate`
To reset the database
`npx prisma migrate reset`
To migrate changes in schema
`npx prisma migrate dev --name init`
To migrate schema to prod
`npx prisma migrate deploy`

#It was deployed to railway.com/
