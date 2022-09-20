# deploy.sh
#!/bin/bash
set -e
export $(xargs < .env)
# Image tag is the last commit hash
IMAGE_TAG=`git rev-parse HEAD`

docker build . -t $REPO_NAME:$IMAGE_TAG
docker tag $REPO_NAME $HOSTNAME/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG
docker push $HOSTNAME/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG
gcloud run deploy $REPO_NAME --image $HOSTNAME/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG \
  --project $GCP_PROJECT_NAME \
  --platform managed \
  --region $GCP_REGION \
  --allow-unauthenticated
