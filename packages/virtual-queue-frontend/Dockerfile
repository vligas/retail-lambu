# We label our stage as ‘builder’
# FROM node:10-alpine as builder

# WORKDIR /ng-app
# COPY package.json  /ng-app

# ## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

# RUN npm i --verbose


# COPY . /ng-app
# RUN cd /ng-app && ls
# ## Build the angular app in production mode and store the artifacts in dist folder

# RUN npm run ng build --prod --output-path=dist


### STAGE 2: Setup ###

FROM nginx:alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
COPY dist/ .


CMD ["nginx", "-g", "daemon off;"]
