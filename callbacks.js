function getUserDetails(id, getUserSubjects){
    console.log("Getting user details by userId", id);
    getUserSubjects({userroll: "678"})
};
function getUserSubjects(userRoll, getUserMarks){
    console.log("Getting user subjects by roll number", userRoll);
    getUserMarks({subid: "en-1"})
}
function getUserMarks(userSubId){
    console.log("Getting user marks with subid", userSubId)
}
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId)
    })
});