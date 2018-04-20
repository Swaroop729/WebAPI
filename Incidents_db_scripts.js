var faker = require('faker');

function GenerateEmployees(){

   var Incidents = [];

    for(var Id=1;Id<=50;Id++){
        IncidentId = faker.random.number(100000,100000),
        Percentage = faker.random.number(100),
        CreatedDate =  '2018-03-13',
        ModifiedDate = '2018-03-13',
        Comment = faker.lorem.sentence(),
        ResolutionDate = '2018-03-13'

        Incidents.push({
			"insert into Incidents values(":Id,
          IncidentId,
           Percentage,
           Comment,
          Applicatonname: "CQA",
           CreatedDate,
           ModifiedDate,
           ResolutionDate

        })
    }
return { "Incidents" : Incidents}
}
module.exports = GenerateEmployees
