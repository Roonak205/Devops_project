pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t my_dev_app:latest .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh '''
                    docker stop my_dev_app_container || true
                    docker rm my_dev_app_container || true
                    docker run -d \
                        --my_dev_app_container \
                        -p 3000:3000 \
                        my_dev_app:latest
                '''
            }
        }
    }
}