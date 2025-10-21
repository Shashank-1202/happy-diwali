pipeline {
    agent any

    environment {
        DOCKER_REPO = "shashanki12/happy-diwali"
        IMAGE_TAG = "latest"
        DOCKERHUB_CRED = 'dockerhub-cred-id'
        KUBECONFIG_SECRET = 'kubeconfig-secret-id'
    }


    stages {
        stage ('Checkout') {
            steps {
                checkout scm
            }
        }

        stage ('Build') {
            steps {
                sh "docker build -t shashanki12/happy-diwali:latest ."
            }
        }

        stage ('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: DOCKERHUB_CRED, usernameVariable: 'DH_USER', passwordVariable: 'DH_PASS')]) {
                    sh """
                        echo "$DH_PASS" | docker login -u "$DH_USER" --password-stdin
                        docker push ${DOCKER_REPO}:${IMAGE_TAG}
                    """

                }
            }
        }

        stage ('Deploy on Kubernetes') {
            steps {
                withCredentials([file(credentialsId: KUBECONFIG_SECRET, variable: 'KUBECONFIG_FILE')]) {
                    sh '''
                        export KUBECONFIG=${KUBECONFIG_FILE}
                        kubectl apply -f k8s/
                        # Optional: wait until deployment is ready
                        kubectl rollout status deployment/happy-diwali -n default -w --timeout=120s
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Deployed successfully!"
        }
        failure {
            echo "pipeline failure"
        }
    }
}

