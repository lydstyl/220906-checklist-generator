for (let lot = 1; lot <= 6; lot++) {
    ;[
        "information ravalement de façade",
        "information ménage",
        "information régularisation de charge",
        "relevé eau",
        "relevé humidité",
        "preuve entretien chaudière",
        "attestation assurance",
    ].forEach(todo => {
        const title = `Lot ${lot}: ${todo}`

        console.log(title)
    })
}
