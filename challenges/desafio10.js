db.produtos
.find({ valoresNutricionais:
    { $elemMatch: { tipo: "proteínas", quantidade: { $gte: 30, $lte: 40 } } } },
{ nome: true, _id: false });