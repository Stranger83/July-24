function solve(input) {
    let allTowns = {};
    for (let json of input){
        let obj = JSON.parse(json);
        if (!(obj.town in allTowns)){
            allTowns[obj.town] = 0;
        }
        allTowns[obj.town] += obj.income;
    }
    let sortedTownNames = Object.keys(allTowns).sort();
    for (let obj of sortedTownNames) {
        console.log(`${obj} -> ${allTowns[obj]}`);
    }

}
solve(['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']);