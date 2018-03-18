var faker = require('faker');

function GenerateEmployees(){

   var Incidents = [];

    for(var Id=1;Id<=50;Id++){
        IncidentId = faker.random.number(100000,100000),
        Percentage = faker.random.number(100),
        CreatedDate =  faker.date.past(),
        ModifiedDate = faker.date.past(),
        Comment = faker.lorem.sentence(),
        ResolutionDate = '2018-03-13'

        Incidents.push({
            "Id" : Id,
            "IncidentId":IncidentId,
            "Percentage":Percentage,
            "Comment":Comment,
            "ApplicationName":"CQA",
            "CreatedDate":CreatedDate,
           "ModifiedDate":ModifiedDate,
           "ResolutionDate":ResolutionDate

        })
    }
return { "Incidents" : Incidents}
}
module.exports = GenerateEmployees
