-- CreateTable
CREATE TABLE "users" (
    "id_user" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "CPF_CNPJ" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "products" (
    "id_product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "API_ACAE" TEXT NOT NULL,
    "base" TEXT NOT NULL,
    "SAE" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liter" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "categories" (
    "id_category" TEXT NOT NULL,
    "segment" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id_category")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_CPF_CNPJ_key" ON "users"("CPF_CNPJ");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id_category") ON DELETE RESTRICT ON UPDATE CASCADE;
