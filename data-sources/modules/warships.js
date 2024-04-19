const data = [{
    id: "riv", name: "Rivadavia", country: "ar", type: "bb", classId: "riv", cannons: [{
        name: "Bethlehem", caliber: 305, len: 50, projectiles: [{
            name: "Bethlehem", shell: "GPA/GP", perforation: 548
        }, {
            name: "Hadfield", shell: "GPA/GP", perforation: 610
        }, {
            name: "Bethlehem", shell: "GSPA/GO", perforation: 478
        }]
    }, {
        name: "Bethlehem", caliber: 152, len: 50, projectiles: [{
            name: "Bethlehem", shell: "APC", perforation: 251
        }, {
            name: "Bethlehem", shell: "GSPA/GO", perforation: 215
        }]
    }, {
        name: "Bethlehem", caliber: 102, len: 50, projectiles: [{
            name: "CATMAT", shell: "PE/MEE", perforation: 205
        }, {
            name: "Bethlehem", shell: "GAC/AEBT", perforation: 152
        }]
    }]
}, {
    id: "mor",
    name: "Moreno",
    country: "ar",
    type: "bb",
    classId: "riv",
    cannons: ["bet-305-50", "bet-152-50", "bet-102-50"]
}, {
    id: "riv",
    name: "Rivadavia",
    country: "ar",
    type: "bb",
    classId: "riv",
    cannons: ["bet-305-50", "bet-152-50", "bet-102-50"]
}];

export {data}