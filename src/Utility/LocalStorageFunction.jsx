
const setDataToLocal=(id)=>{
    const savedLData=getDataFromLocal();
    const savedData=savedLData.filter(ids=>ids!==id);
    const newData=[...savedData,id]
    localStorage.setItem('appliedJobs',JSON.stringify(newData))
}


const getDataFromLocal=()=>{
    let appliedJobs=[];
    const localData=localStorage.getItem('appliedJobs');
    if(localData){
        appliedJobs=JSON.parse(localData)
    }
    return appliedJobs;
}

export {setDataToLocal,getDataFromLocal}