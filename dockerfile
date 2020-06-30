# environment build
FROM node:10

WORKDIR /lift-trace
COPY /package.json ./

COPY . /lift-trace

RUN npm install;

EXPOSE 9000

CMD ["npm", "run", "production"]


#server environment
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/configfile.template
# ENV PORT 8080
# ENV HOST 0.0.0.0
# RUN sh -c "envsubst '\$PORT'  < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"
# COPY --from=react-build /app/build /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]