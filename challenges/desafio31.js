db.produtos.find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    { nome: true, _id: false },
    );
// gt [isso é maior > que isso]