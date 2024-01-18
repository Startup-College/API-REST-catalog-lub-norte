const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
    const categoria = await prisma.categories.upsert({
        where: {id_category: "1"},
        update: {},
        create: {
            id_category: '1',
            segment:'Moto',
            Products:{
                connectOrCreate:{
                  where:{id_product:'1'},
                  create:{ id_product: '1',
                  name: 'Texaco Havoline',
                  API_ACAE: 'API SP',
                  base: 'semissintético',
                  SAE: '15W-40',
                  brand: 'Texaco',
                  description: 'Óleo lubrificante semissintético recomendado para motores de 4 tempos Flex',
                  liter: '2'}
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