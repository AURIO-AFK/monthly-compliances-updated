document.addEventListener('DOMContentLoaded', function () {
    const Enter = document.querySelector('.Enter')
    const monthValue = document.querySelector('.month');
    const deadline = document.querySelector('.Deadline');  
    const deadline1 = document.querySelector('.Deadline1');  
    const deadline2 = document.querySelector('.Deadline2');  
    const deadline3 = document.querySelector('.Deadline3');  
    const deadline4 = document.querySelector('.Deadline4');  
    const deadline5 = document.querySelector('.Deadline5');  
    const deadline6 = document.querySelector('.Deadline6');  
    const deadline7 = document.querySelector('.Deadline7');  
    const deadline8 = document.querySelector('.Deadline8');  
    const deadline9 = document.querySelector('.Deadline9');  
    const deadline10 = document.querySelector('.Deadline10');  
    const deadline11 = document.querySelector('.Deadline11');  
    const deadline12 = document.querySelector('.Deadline12');  
    const deadline13 = document.querySelector('.Deadline13');  
    const deadline14 = document.querySelector('.Deadline14');  
    const deadline15 = document.querySelector('.Deadline15');  
    const deadline16 = document.querySelector('.Deadline16');  
    const deadline17 = document.querySelector('.Deadline17');  
    const deadline18 = document.querySelector('.Deadline18');  
    const deadline19 = document.querySelector('.Deadline19');  
    const deadline20 = document.querySelector('.Deadline20');  
    const deadline21 = document.querySelector('.Deadline21');  
    const deadline22 = document.querySelector('.Deadline22');  
    const deadline23 = document.querySelector('.Deadline23');  
    const deadline24 = document.querySelector('.Deadline24');  
    const deadline25 = document.querySelector('.Deadline25');  
    const deadline26 = document.querySelector('.Deadline26');  
    const deadline27 = document.querySelector('.Deadline27');  
    const deadline28 = document.querySelector('.Deadline28');  
    const deadline29 = document.querySelector('.Deadline29');  
    const deadline30 = document.querySelector('.Deadline30');  
    const deadline31 = document.querySelector('.Deadline31');  
    const deadline32 = document.querySelector('.Deadline32');  
    const deadline33 = document.querySelector('.Deadline33');  
    const deadline34 = document.querySelector('.Deadline34');  
    const deadline35 = document.querySelector('.Deadline35');  
    const deadline36 = document.querySelector('.Deadline36');  

    function monthValueChecker() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let selectedMonthIndex = monthNames.indexOf(monthValue.value);
        const yearvalue = document.getElementById('year').value
        // Debugging: Check the current value
        console.log("Selected Month:", monthValue.value, "Index:", selectedMonthIndex);
        let nextMonth = monthNames[(selectedMonthIndex + 1) % 12];  // Loop back to Jan after Dec
            return  deadline.value = `5th ${nextMonth}, ${yearvalue}` , 
                    deadline1.value = `To be Adhered on Monthly Basis`,
                    deadline2.value = `31st Mar, ${yearvalue}`,
                    deadline3.value = `5th ${nextMonth}, ${yearvalue}`,
                    deadline4.value = `5th ${nextMonth}, ${yearvalue}`,
                    deadline5.value = `5th ${nextMonth}, ${yearvalue}`,
                    deadline6.value = `11th ${nextMonth}, ${yearvalue}`,
                    deadline7.value = `20th ${nextMonth}, ${yearvalue}`,
                    deadline8.value = `20th ${nextMonth}, ${yearvalue}`,
                    deadline9.value = `14th ${nextMonth}, ${yearvalue}`,
                    deadline10.value = `Half Yearly`,
                    deadline11.value = `As & When Required`,
                    deadline12.value = `31st Dec`,
                    deadline13.value = `1st week of Apr`,
                    deadline14.value = `5th ${nextMonth}, ${yearvalue}`,
                    deadline15.value = `7th ${nextMonth}, ${yearvalue}`,
                    deadline16.value = `31 days from Quarter end`,
                    deadline17.value = `After 15 days of TDS Returns due dates for each quarters`,
                    deadline18.value = `Checked every Quarter`,
                    deadline19.value = `15 days prior to due date`,
                    deadline20.value = `20 days before Each Qtr Ends`,
                    deadline21.value = `15th ${nextMonth}, ${yearvalue}`,
                    deadline22.value = `31th Sep`,
                    deadline23.value = `30th Sep`,
                    deadline24.value = `30th Oct`,
                    deadline25.value = `30th Nov`,
                    deadline26.value = `15th ${nextMonth}, ${yearvalue}`,
                    deadline27.value = `30th Apr after FY Ends`,
                    deadline28.value = `31st July`,
                    deadline29.value = `30th Apr`,
                    deadline30.value = `31st July`,
                    deadline31.value = `As & When Required`,
                    deadline32.value = `As & When Required`,
                    deadline33.value = `As & When Required`;
    }
    // Call the function when the month value changes
    Enter.addEventListener('click', monthValueChecker);
    monthValueChecker();  // Initialize on load if needed
});



// deadline.forEach(deadline => {
//     deadline.value = `5th ${nextMonth}, ${yearvalue}`;
//     // Debugging: Check each deadline update
//     console.log("Updated Deadline:", deadline.value);
// });
// deadline1.forEach(deadline1 => {
//     deadline1.value = `11th ${nextMonth}, ${yearvalue}`;
//     // Debugging: Check each deadline update
//     console.log("Updated Deadline:", deadline1.value);
// });











async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const { autoTable } = window.jspdf;

    // Create a new PDF document
    const doc = new jsPDF();

    // Get the table element
    const table = document.querySelector("table");

    if (!table) {
        console.error('Table element not found');
        return;
    }

    // Extract table headers
    const headers = [];
    table.querySelectorAll("thead th").forEach(th => {
        headers.push(th.innerText);
    });

    // Extract table rows
    const rows = [];
    table.querySelectorAll("tbody tr").forEach(tr => {
        const row = [];
        tr.querySelectorAll("td").forEach(td => {
            const input = td.querySelector('input');
            if (input) {
                if (input.type === 'checkbox') {
                    // Convert checkbox to text representation
                    row.push(input.checked ? '✔️' : ' ');
                } else {
                    row.push(input.value);
                }
            } else {
                row.push(td.innerText);
            }
        });

        const sectionHeading = tr.classList.contains('section-heading');
        if (sectionHeading) {
            rows.push([tr.innerText.trim(), '', '', '']);
        } else {
            rows.push(row);
        }
    });

    // Add the table to the PDF
    doc.autoTable({
        head: [headers],
        body: rows,
        startY: 20,
        margin: { horizontal: 10 },
        theme: 'grid',
        willDrawCell: (data) => {
            if (data.row.raw[0].startsWith('1.') || data.row.raw[0].startsWith('2.') || 
                data.row.raw[0].startsWith('3.') || data.row.raw[0].startsWith('4.') || 
                data.row.raw[0].startsWith('5.') || data.row.raw[0].startsWith('6.') || 
                data.row.raw[0].startsWith('7.') || data.row.raw[0].startsWith('8.') || 
                data.row.raw[0].startsWith('9.')) {
                // Set background color for section heading rows
                doc.setFillColor(200, 220, 255); // Light blue background
                doc.setTextColor(0, 0, 0); // Black text color
                doc.setFont("helvetica", "bold");
                doc.setFontSize(9);
            }
        }
    });

    // Save the generated PDF
    doc.save("Compliance_Report.pdf");
}
