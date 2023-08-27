### Steps to configure this setup

docker network create first-net

docker run -d -p 27017:27017 --network first-net --name mongo-db mongo

docker build -t node-mongo-image .

docker run --name my-app --network first-net node-mongo-image 

 or

docker run -d --name my-app --network first-net node-mongo-image
