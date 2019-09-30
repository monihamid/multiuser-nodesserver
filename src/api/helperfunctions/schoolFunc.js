

export async function generateSchoolID (Schoolname, streetno, streetName) {
    let schoolID = ''
    let sname = Schoolname.substring(0,3);
    let stname = streetName.substring(0,3) 
    return schoolID.concat(sname, streetno, stname).toUpperCase()
   
}