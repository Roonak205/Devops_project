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
                sh 'docker build -t devops-node-app .'
            }
        }
    }
}