db.produtos
.find({ ingredientes: { $eq: "picles" } },
{ nome: true, _id: false, valoresNutricionais: { $slice: 3 }, ingredientes: true });