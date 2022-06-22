docker login

npm run build
docker build --rm -t matheuscristian/confbot:latest .

sleep 2
clear
echo "Do you want to publish the image? (y/n)"
read ans

if [ ! $ans = "n" ]; then
    docker push matheuscristian/confbot:latest
fi