FROM node:10.9.0 as builder

# create app directory in container
RUN mkdir -p /app && npm i -g gulp node-gyp @angular/cli
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# set /app directory as default working directory
WORKDIR /app

# only copy package.json initially so that `RUN yarn` layer is recreated only
# if there are changes in package.json
ADD package.json /app/

RUN npm install 

COPY . /app/

RUN ng build --prod

FROM nginx:1.11.12-alpine

RUN rm /etc/nginx/conf.d/default.conf
ADD nginx/conf.d/ /etc/nginx/conf.d/

COPY --from=builder /app/dist/poc-chart/ /home/forklift

EXPOSE 80