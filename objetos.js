class Carteira {
   constructor(nome, saldo, limite_cartao, fatura, assinatura) {
     this.conta_bancaria = {
       nome: nome,
       saldo: saldo,
       limite_cartao: limite_cartao,
       fatura: fatura,
       assinaturam: assinatura
     };
   }
 }
 
 const novaCarteira = new Carteira(
   'Carteira Lucas',
   8000,
   3000,
   {
     valor: 2000,
     dt_vencimento: '25/06/2023',
     dt_fechamento: '01/06/2023',
     items: [
       { nome: 'Supermercado', valor: 500 },
       { nome: 'Farmácia', valor: 200 },
       { nome: 'Restaurante', valor: 700 },
       { nome: 'Gasolina', valor: 600 }
     ]
   },
   {
     nome: 'apple GB',
     valor: 3.50
   }
 );+
 
 console.log(novaCarteira)