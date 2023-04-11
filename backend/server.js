const express = require('express')
const app = express()
const port = 8383
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./database.sqlite')

app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.listen(port, () => console.log('Server has started'))

app.post('/Home', (req, res) => {
    db.run("INSERT INTO Home (HomeID, HomeType, AddressID, FloorSpace, Floors, Bedrooms, Bathrooms, LandSize, YearConstructed) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", [req.body.id, req.body.homeType, req.body.addressID, req.body.floorSpace, req.body.floors, req.body.bedrooms, req.body.bathrooms, req.body.landSize, req.body.yearConstructed], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.post('/Owner', (req, res) => {
    db.run("INSERT INTO Owner (SSN, Name, NumDependents, Income, Age, Profession) VALUES (?, ?, ?, ?, ?, ?)", [req.body.ssn, req.body.name, req.body.numDependants, req.body.income, req.body.age, req.body.profession], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.post('/Agent', (req, res) => {
    db.run("INSERT INTO AGENT (AgentID, Name, RealEstateCompany, CommissionRate, City) VALUES (?, ?, ?, ?, ?)", [req.body.id, req.body.name, req.body.realEstateCompany, req.body.commissionRate, req.body.city], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.post('/Location', (req, res) => {
    db.run("INSERT INTO LOCATION (AddressID, Address, Street, City, ZipCode, County, Population) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.id, req.body.address, req.body.street, req.body.city, req.body.zipCode, req.body.county, req.body.population], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.post('/HomeSale', (req, res) => {
    db.run("INSERT INTO HomeSale (SaleID, HomeID, BuyerSSN, SellerSSN, AgentID, SaleDate, SalePrice) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.saleID, req.body.homeID, req.body.buyerSSN, req.body.sellerSSN, req.body.agentID, req.body.saleDate, req.body.salePrice], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.delete('/Agent', (req, res) => {
    db.run("DELETE FROM Agent WHERE AgentID = ?", [req.body.agentID], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.delete('/Home', (req, res) => {
    db.run("DELETE FROM Home WHERE homeID = ?", [req.body.homeID], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.put('/Agent', (req, res) => {
    db.run("UPDATE Agent SET Name = ?, RealEstateCompany = ?, CommissionRate = ?, City = ? WHERE AgentID = ?", [req.body.name, req.body.realEstateCompany, req.body.commissionRate, req.body.city, req.body.id], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.put('/Home', (req, res) => {
    db.run("UPDATE Home SET HomeType = ?, AddressID = ?, FloorSpace = ?, Floors = ?, Bedrooms = ?, Bathrooms = ?, LandSize = ?, YearConstructed = ? WHERE HomeID = ?", [req.body.homeType, req.body.addressID, req.body.floorSpace, req.body.floors, req.body.bedrooms, req.body.bathrooms, req.body.landSize, req.body.yearConstructed, req.body.id], (err) => {
        if (err) {
            console.log(err)
        }
    })
})

app.get('/Home', (req, res) => {

    let myHomeType
    if (req.query.homeType === "N/A") {
        myHomeType = "HomeType"
    } else {
        myHomeType = `"${req.query.homeType}"`
    }

    let myYearConstructed
    if (req.query.yearConstructed === "") {
        myYearConstructed = -1
    } else {
        myYearConstructed = req.query.yearConstructed
    }

    let myBedrooms
    let myBedroomsCompare
    if (req.query.bedrooms === "") {
        myBedrooms = -1
        myBedroomsCompare = ">="
    } else {
        myBedrooms = req.query.bedrooms
        switch(req.query.bedroomsCompare) {
            case "atLeast":
                myBedroomsCompare = ">="
                break
            case "atMost":
                myBedroomsCompare = "<="
                break
            case "exactly":
                myBedroomsCompare = "="
                break
        }
    }

    let myFloorspace
    let myFloorspaceCompare
    if (req.query.floorspace === "") {
        myFloorspace = "Floorspace"
        myFloorspaceCompare = "="
    } else {
        myFloorspace = req.query.floorspace
        switch(req.query.floorspaceCompare) {
            case "atLeast":
                myFloorspaceCompare = ">="
                break
            case "atMost":
                myFloorspaceCompare = "<="
                break
        }
    }

    let attributeSort = req.query.sortBy
    let mySortOrder = req.query.sortByOrder

    let queryString = "SELECT * FROM HOME WHERE HomeType = " + myHomeType + " AND YearConstructed >= " + myYearConstructed + " AND Bedrooms " + myBedroomsCompare + " " + myBedrooms + " AND Floorspace " + myFloorspaceCompare + " " + myFloorspace + " ORDER BY " + attributeSort + " " + mySortOrder

    db.all(queryString, [], (err, data) => {
        if (err) {
            console.log(err)
            res.json({})
        }
        res.json(data)
    })
})