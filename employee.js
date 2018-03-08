var faker = require('faker');

function GenerateEmployees(){

   var Incidents = [];

    for(var Id=1;Id<=50;Id++){
        IncidentId = faker.random.number(100000,100000),
        Percentage = faker.random.number(100),
        CreatedDate =  faker.date.past(),
        ModifiedDate = faker.date.past(),
        Comment = faker.lorem.sentence()

        Incidents.push({
            "Id" : Id,
            "IncidentId":IncidentId,
            "Percentage":Percentage,
            "Comment":Comment,
            "ApplicationName":"CQA",
            "CreatedDate":CreatedDate,
           "ModifiedDate":ModifiedDate
        })
    }
return { "Incidents" : Incidents}
}
module.exports = GenerateEmployees
