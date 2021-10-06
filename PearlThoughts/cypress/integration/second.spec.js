let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
        })
    })
    it ('Data Driven: SampleTest', () => {
        cy.fixture('xlsxData').then((data) => {
            for ( let i = 0; i < rowsLength; i++) {
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public-api/users'
                })
                    .should((response) => {
                        cy.log(JSON.stringify(response.body))
                        expect(response.isOkStatusCode).to.equal(true);
                        expect(response).property('status').to.equal(data.rows[i].status);
                    });

            }
        })
    })
})