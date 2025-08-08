import { relations } from "drizzle-orm";
import { uuid, pgTable, varchar, text, integer, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
});

export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const categoryRelations = relations(categoryTable, (params) => {
    return {
        products: params.many(productTable),
    }
})

export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    categoryId: uuid("category_id").notNull().references(() => categoryTable.id),
    name: text().notNull(),
    slug: text().notNull().unique(),
    description: text().notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const productsRelations = relations(productTable, (params) => {
    return {
        categories: params.one(categoryTable, {
            fields: [productTable.categoryId],
            references: [categoryTable.id],
        }),
        variants: params.many(productVariantTable),
    }
})

export const productVariantTable = pgTable("product_variant", {
    id: uuid().primaryKey().defaultRandom(),
    productId: uuid("product_id").notNull().references(() => productTable.id),
    name: text().notNull(),
    slug: text().unique(),
    color: text().notNull(),
    imageUrl: text("image_url").notNull(),
    priceInCents: integer("price_in_cents").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),

})

export const productVariantRelations = relations(productVariantTable, (params) =>{
    return{
        product: params.one(productTable, {
            fields: [productVariantTable.productId],
            references: [productTable.id]
        }) 
    }
})