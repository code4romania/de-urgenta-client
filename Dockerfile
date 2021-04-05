FROM node:15.13.0-alpine
WORKDIR /app
# Restore dependencies
COPY package.json /app
COPY yarn.lock /app
RUN yarn
# Copy code
COPY . /app
# Build static
RUN yarn build
# Run 
EXPOSE 3000
ENTRYPOINT yarn start