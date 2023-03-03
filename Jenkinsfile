pipeline{
    agent any
    stages{
        stage("verify tools"){
            steps{
                sh '''
                  docker version
                  docker info
                  docker compose version
                  curl --version
                '''
            }
        }
        stage('start container'){
            steps{
                sh'''
                  docker compose up -d
                  docker compose ps
                '''
            }
        }
    }
}