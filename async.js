function getUserDetails(id){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve({userroll: "678"})//API call
        } ,2000);
    })
};
const myfun = async() =>{
    console.log("123");
    const result = await getUserDetails("123");
    console.log("User Details:", result);
    console.log("456");

};

myfun();
function getUserSubjects(userRoll){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve({subid: "en-1"})//API call
        },2000);
    })
}
