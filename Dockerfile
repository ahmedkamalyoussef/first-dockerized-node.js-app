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
CMD [ "npm", "run", "start-dev" ]


FROM based as production

WORKDIR /app
COPY package.json .
# Use ARG to conditionally install dependencies based on the environment
# ARG NODE_ENV
# RUN if [ "${NODE_ENV}" = "production" ]; \
#     then npm install --only=production; \
#     else npm install; \
#     fi
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]