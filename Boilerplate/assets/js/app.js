window.addEventListener('DOMContentLoaded', () => {
    // const tableJS = `<table>
    //                 <tbody>
    //                     <tr>
    //                         <th>1:1</th>
    //                         <th>1:2</th>
    //                         <th>1:3</th>
    //                         <th>1:4</th>
    //                     </tr>
    //                     <tr>
    //                         <td>2:1</td>
    //                         <td>2:2</td>
    //                         <td>2:3</td>
    //                         <td>2:4</td>
    //                     </tr>
    //                     <tr>
    //                         <td>3:1</td>
    //                         <td>3:2</td>
    //                         <td>3:3</td>
    //                         <td>3:4</td>
    //                     </tr>
    //                     <tr>
    //                         <td>4:1</td>
    //                         <td>4:2</td>
    //                         <td>4:3</td>
    //                         <td>4:4</td>
    //                     </tr>
                        
    //                 </tbody>
    //             </table>`
    
    // console.log(document.body.innerHTML = tableJS)
    // document.body.innerHTML += tableJS;
    // console.log(document.body.innerHTML = tableJS)

    // console.log(document.body.innerText = tableJS)
    // document.body.innerText += tableJS;
    // console.log(document.body.innerText = tableJS)

    console.log('//////////////////////////////////////////////////////////////////////');

    // let foo = 'something'
    // const tableJS1 = `<table>
    //                 <tbody>
    //                     <tr>
    //                         <th>1:1</th>
    //                         <th>1:2</th>
    //                         <th>1:3</th>
    //                         <th>1:4</th>
    //                     </tr>
    //                     <tr>
    //                         <td>2:1</td>
    //                         <td>2:2</td>
    //                         <td>2:3</td>
    //                         <td>2:4</td>
    //                     </tr>
    //                     <tr>
    //                         <td>3:1</td>
    //                         <td>3:2</td>
    //                         <td>3:3</td>
    //                         <td>3:4</td>
    //                     </tr>
    //                     <tr>
    //                         <td>${foo}</td>
    //                         <td>4:2</td>
    //                         <td>4:3</td>
    //                         <td>4:4</td>
    //                     </tr>
                        
    //                 </tbody>
    //             </table>`
    
    // console.log(document.body.innerHTML = tableJS1)
    // document.body.innerHTML += tableJS1;
    // console.log(document.body.innerHTML = tableJS1)

    console.log('//////////////////////////TABLE WITH JS////////////////////////////////////////////');

    // let table = document.createElement('table');
    // let tbody = document.createElement('tbody');

    // table.style.borderCollapse = 'collapse';

    // for(let i = 1; i < 5; i++) {
    //     let tRow = document.createElement('tr');

    //     for(let j = 1; j < 5; j++){
    //         let tData = document.createElement('td');
    //         tData.innerText = `${i}:${j}`;
    //         tData.style.border = '1px solid red';
    //         tData.style.padding = '5px 10px';
    //         tRow.append(tData);
    //     }
    //     tbody.append(tRow);
    // }

    // for(let i = 0; i < table.rows.length; i++) {
    //     let row = table.rows[i];
    //     row.cells[i].style.background = 'blue';
    // }
    

    // table.append(tbody);
    // document.body.append(table);
    // console.log(table)


    // console.log(table.tBodies);
    // console.log(table.rows);

    let table = document.createElement('table');
let tBody = document.createElement('tbody');

for(let i = 1; i < 5; i++) {
    let tRow = document.createElement('tr');
    for(let j = 1; j < 5; j++){
        let tData = document.createElement('td');
        tData.innerText = `${i}:${j}`;

        tData.style.border = '1px solid red';
        tData.style.padding = '5px 10px';

        tRow.append(tData);
    }
    tBody.append(tRow);
}

table.append(tBody);
document.body.append(table);
console.log(table);

for(let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.background = 'blue';
}
    
    

    console.log('//////////////////////////TABLE WITH JS////////////////////////////////////////////');


    // let table1 = document.createElement('table');
    // let tbody1 = document.createElement('tbody');


    // let thead = document.createElement('thead');
    // let tr = document.createElement('tr');
    
    // for(let i = 1; i < 5; i++) {
    //     let tData1 = document.createElement('td');
    //         tData1.innerText = `${i}:${i}`;
    //         tr.append(tData1);
    //     }
    //     thead.append(tr);
    //     for(let i = 1; i < 5; i++) {
    //         for(let j = 1; j < 5; j++){
    //             let tRow = document.createElement('tr');
    //             // tData1.innerText = `${i}:${j}`;

    //             // tRow.append(tData1);
    //         }
    //         // tbody.append(tRow);
    //     }

    // table1.append(thead);
    // table1.append(tbody);
    // document.body.append(table1);
    // console.log(table1)


    // console.log(table1.tBodies);
    // console.log(table1.rows);

    console.log('////////////////////////////////////////////////////////////////////////////');

    let ul = document.createElement('ul');
        for(let i = 1; i < 6; i++){
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = `Paragraph ${i}`;

        p.setAttribute('id', `myParagraph${i}`);

        let a = document.createElement('a');
        a.innerText = `Anchor ${i}`;

        a.setAttribute('href', `#${i}`);
        console.log(a.href);

        li.append(p);
        li.append(a);
    
        ul.append(li);
}
document.body.append(ul)

console.log('////////////////////////////////////////////////////////////////////////////');

const container = document.getElementById('container');
console.log(container);

const rows = 10;
const col = 10;
const dimension = '50px';

for(let i = 0; i < rows; i++){
    let rowDiv = document.createElement('div');
    for(let j = 0; j < col; j++){
        let div = document.createElement('div');
        div.style.width = dimension;
        div.style.height = dimension;
        div.style.border = '1px solid red';
        div.style.display = 'inline-block';

        rowDiv.append(div);
    }
    container.append(rowDiv);
}

});