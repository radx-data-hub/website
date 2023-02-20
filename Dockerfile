# Build environment
###################
FROM node:16-alpine3.14 AS builder

# Create and set working directory
RUN mkdir /src
WORKDIR /src

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# Install dependencies
COPY package*.json /src/
RUN npm i
# Copy in source files
COPY . /src

# Build app
RUN npm run build

# Production environment
########################
FROM nginx:latest
EXPOSE 80
COPY --from=builder /src/.next /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
