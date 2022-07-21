import {db } from './modules/config.js'
import getDb from './modules/fetch-db.js'
import insertInTable from './modules/insert.js'
import search from './modules/search.js'

var employees = await getDb(db)
const tbody  = document.querySelector('.msgs')
const input = document.querySelector('input')
console.log(employees.length);


insertInTable(tbody,employees)

input.addEventListener('input', (e) => {
    const tbodyy  = document.querySelector('.msgs')
    const sel = document.querySelector('select')
    search(e,tbodyy,sel)
})