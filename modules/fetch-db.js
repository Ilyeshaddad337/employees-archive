import {collection,getDocs} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";


const getDb = async (db) => {
    var employeesRef = collection(db,'employees')
    var data = await getDocs(employeesRef)
    let employees = []
    data.forEach((doc) => {
      employees.push({'id': doc.id,... doc.data()})
    });
    return employees
}

export default getDb