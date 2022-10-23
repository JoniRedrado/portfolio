VERSION=1.0.0
IMAGE_NAME=portfolio

docker: 
	sudo docker build -f Dockerfile -t $(IMAGE_NAME) .
	sudo docker tag $(IMAGE_NAME):latest $(IMAGE_NAME):$(VERSION)

exec_docker:
	sudo docker run -p 3000:3000 \
	$(IMAGE_NAME):$(VERSION)

ngrok:
	ngrok http 3000 --host-header localhost

exec_docker_no_params:
	sudo docker run -p 3000:3000 \
	$(IMAGE_NAME):$(VERSION)

erase_dockers:
	sudo docker rm -vf $(docker ps -a -q); docker rmi -f $(docker images -a -q)
