app.controller("jobctrl",function($scope,jobfactory){
    $scope.postJob=function(){
        jobfactory.addNewJob($scope.jobTitle, $scope.jobDesc, $scope.companyName, $scope.jobLocation, $scope.jobSalary, $scope.jobExp, $scope.jobKeySkills, $scope.empName);

        //jobfactory.addNewJob(job);
        $scope.jobList = jobfactory.jobList;
        console.log($scope.jobList);/*
        console.log($scope.jobTitle);
        console.log($scope.jobDesc);*/
        
    },
    $scope.deleteJob=function($index){
        jobfactory.deleteJob($index);
    }/*,
    $scope.editJob()=function($index){
        jobfactory.editJob($index);
    }*/
})