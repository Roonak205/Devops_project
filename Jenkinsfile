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

        stage('Deploy HTML') {
            steps {
                echo 'Deploying simple HTML page to Nginx...'
                
                // Clear old files from the Nginx directory
                sh 'rm -rf /var/www/html/*'
                
                // Copy all project files to the Nginx web folder
                sh 'cp -r * /var/www/html/'
            }

        // stage('Docker Build') {
        //     steps {
        //         echo 'Building Docker image...'
        //         sh 'docker build -t my_dev_app:latest .'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying application...'
        //         sh '''
        //             docker stop my_app_container || true
        //             docker rm my_app_container || true
        //             docker run -d \
        //                 --name my_app_container \
        //                 -p 3000:3000 \
        //                 my_dev_app:latest
        //         '''
        //     }
        }
    }
}