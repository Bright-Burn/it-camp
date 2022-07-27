# Stage 1 - Build frontend
FROM registry.access.redhat.com/ubi8/nodejs-14:1-51 as build-deps
LABEL maintainer="GpnDs"

WORKDIR /app
USER 0

# install yarn
RUN npm i -g yarn --registry=https://registry.npmjs.org/

COPY ["package.json", "./"]


# install dependencies
RUN yarn install

# copy source files
COPY ./ .

# build & test
RUN yarn run build

# Stage 2 - the production environment
FROM registry.access.redhat.com/ubi8/nginx-118:1-46 as final
ARG APP_VERSION
LABEL maintainer="GpnDs"
EXPOSE 8080

USER 0
WORKDIR /usr/share/nginx/html

## copy app files
COPY nginx/default.conf /etc/nginx/conf.d/default.template
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY scripts/entrypoint.sh /
COPY --from=build-deps /app/build /usr/share/nginx/html

RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]

## add permissions for 1001
RUN chown -R 1001:0 /etc/nginx && \
    chown -R 1001:0 /usr/share/nginx/html

USER 1001
CMD nginx -g "daemon off;"
