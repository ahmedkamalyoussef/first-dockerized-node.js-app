FROM node:20.16.0 as based
FROM based as development
WORKDIR /app
COPY package.json .
# Use ARG to conditionally install dependencies based on the environment
# ARG NODE_ENV
# RUN if [ "${NODE_ENV}" = "production" ]; \
#     then npm install --only=production; \
#     else npm install; \
#     fi
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]


FROM based as production

WORKDIR /app
COPY package.json .
# Use ARG to conditionally install dependencies based on the environment
# ARG NODE_ENV
# RUN if [ "${NODE_ENV}" = "production" ]; \
#     then npm install --only=production; \
#     else npm install; \
#     fi
RUN npm ci --only=production && npm cache clean --force
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start-dev" ]
