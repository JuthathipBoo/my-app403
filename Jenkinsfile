pipeline{
    agent any
    stage('Check out'){
        steps{
            print"Check out"
            checkout([
             $class: 'GitSCM',
             branches: [[name: '*/master']],
             userRemoteConfigs: [ [
                    credentialsId: 'juthathip',
                    url: 'https://github.com/JuthathipBoo/my-app403.git'
                ] ]
            ])
            print"check out success"
        }
    }
}