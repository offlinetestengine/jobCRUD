app.factory("jobfactory",function(){
    var jobs={
        jobList:[],
        addNewJob:function(jobTitle, jobDesc, companyName, jobLocation, jobSalary, jobExp, jobKeySkills, empName){
        //addNewJob:function(job){
            var newJob = new Job(jobTitle,jobDesc,companyName,jobLocation,jobSalary,jobExp,jobKeySkills,empName);
            //var newJob = new Job(job);
            this.jobList.push({'item':newJob, 'status':'true'});
        },
        deleteJob:function($index){
            this.jobList.splice($index,1);
        }/*,
        editJob:function($index){
        }*/
    }
    return jobs;
});

function Job(jobTitle, jobDesc, companyName, jobLocation, jobSalary, jobExp, jobKeySkills, empName){
    this.jobTitle = jobTitle;
    this.jobDesc = jobDesc;
    this.companyName = companyName;
    this.jobLocation = jobLocation;
    this.jobSalary = jobSalary;
    this.jobExp = jobExp;
    this.jobKeySkills = jobKeySkills;
    this.empName = empName;
}
