const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
    const Texaco = await prisma.categories.upsert({
        where: {id_category: "1"},
        update: {},
        create: {
            id_category: '1',
            segment:'Carro',
            Products:{
                connectOrCreate:{
                  where:{id_product:'1'},
                  create:{ 
                  id_product: '1',
                  name: 'Texaco Havoline',
                  API_ACAE: 'API SP',
                  base: 'semissintético',
                  SAE: '15W-40',
                  brand: 'Texaco',
                  description: 'Óleo lubrificante semissintético recomendado para motores de 4 tempos Flex',
                  liter: '1'}
                }
            }
        }
    });
    const Lubrax = await prisma.categories.upsert({
      where: {id_category: "2"},
      update: {},
      create: {
          id_category: '2',
          segment:'Moto',
          Products:{
              connectOrCreate:{
                where:{id_product:'2'},
                create:{ 
                id_product: '2',
                name: 'Lubrax Indicc',
                API_ACAE: 'API SL',
                base: 'semissintético',
                SAE: '10W-30',
                brand: 'Lubrax',
                description: 'Assegura a lubrificação adequada do motor nas partidas a frio, reduzindo o desgaste dos seus com- ponentes, tais como mancais, eixos, pistões e comando de válvulas. Possui ainda alto poder de limpeza garantindo proteção contra formação de verniz e borras.',
                liter: '1'}
              }
          }
      }
  });
    const Falke = await prisma.categories.upsert({
      where: {id_category: "3"},
      update: {},
      create: {
          id_category: '3',
          segment:'Moto',
          Products:{
              connectOrCreate:{
                where:{id_product:'3'},
                create:{ 
                id_product: '3',
                name: 'Falke Moto4T',
                API_ACAE: 'API SL',
                base: 'semissintético',
                SAE: '20W-50',
                brand: 'Falke',
                description: 'é um óleo lubrificante com base semissintética. Desenvolvido com aditivos de última geração para motocicletas com motores de quatro tempos de aspiração natural ou turbo. Sua formulação renovada contém moléculas que fornecem maior eficiência de combustível e melhor desempenho do motor, evitando desgaste e formação de depósitos e incrustações.',
                liter: '1'}
              }
          }
      }
  });
    const Evora = await prisma.categories.upsert({
      where: {id_category: "4"},
      update: {},
      create: {
          id_category: '4',
          segment:'Carro',
          Products:{
              connectOrCreate:{
                where:{id_product:'4'},
                create:{ 
                id_product: '4',
                name: 'Evora C3',
                API_ACAE: 'API SN',
                base: 'sintético',
                SAE: '5W-30',
                brand: 'Evora',
                description: 'é um óleo 100% sintético, de alta performance, com baixo teor de formação de cinzas. Foi desenvolvido para aumentar a performance e manter o bom funcionamento do sistema de redução de emissões dos gases de escape dos mais modernos e exigente motores.',
                liter: '1'}
              }
          }
      }
    });
    const Petronas = await prisma.categories.upsert({
      where: {id_category: "5"},
      update: {},
      create: {
          id_category: '5',
          segment:'Maquina',
          Products:{
              connectOrCreate:{
                where:{id_product:'5'},
                create:{ 
                id_product: '5',
                name: 'Petronas Syntium 300 ',
                API_ACAE: 'API SN',
                base: 'sintético',
                SAE: '20W-50',
                brand: 'Petronas',
                description: 'é um lubrificante de base mineral com propriedades anticorrosivas, antidesgaste e antiespumante. Seus aditivos dispersantes e detergentes possibilitam uma menor formação de depósitos nos pistões. O poder antioxidante deste lubrificante retarda seu processo de envelhecimento.',
                liter: '1'}
              }
          }
      }
    });
    console.log("seeders criado",main)
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });