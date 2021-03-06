import { PrismaClient } from '@prisma/client';

import { inputBookObject } from '../helpers/InputTypes';

const prisma = new PrismaClient();

export default class Books {
    static getAll() {
        return prisma.book.findMany();
    }

    static async getRandom() {
        const skip = Math.floor(Math.random() * (await prisma.book.count()));
        const book = await prisma.book.findMany({
            take: 1,
            skip,
        });

        if (global.SESSION_USER && global.SESSION_USER.shop_cart_itens) {
            let { shop_cart_itens } = await prisma.user.findUnique({
                where: {
                    id: global.SESSION_USER.id,
                },
                select: {
                    shop_cart_itens: true,
                },
            });

            shop_cart_itens = JSON.parse(shop_cart_itens);

            if (shop_cart_itens.length) {
                book[0].inLoggedUserCart = await shop_cart_itens.some(
                    (item) => item.id === book[0].id
                );
                return book[0];
            }
        }

        book[0].inLoggedUserCart = false;

        return book[0];
    }

    static getTotal() {
        return prisma.book.count();
    }

    static getById(book_id: string) {
        return prisma.book.findUnique({
            where: {
                id: book_id,
            },
        });
    }

    static searchTitle(bookTitle: string) {
        return prisma.book.findMany({
            where: {
                title: {
                    contains: bookTitle,
                    mode: 'insensitive',
                },
            },
        });
    }

    static create(bookObject: inputBookObject) {
        return prisma.book.create({
            data: {
                title: bookObject.title,
                year_release: parseInt(bookObject.year_release),
                price: bookObject.price,
                image: bookObject.image,
                genres: bookObject.genres,
                pages: parseInt(bookObject.pages),
                author: bookObject.author,
                amazon_link: bookObject.amazon_link,
                resume: bookObject.resume,
            },
        });
    }

    static update(bookObject: inputBookObject) {
        return prisma.book.update({
            where: {
                id: bookObject.id,
            },
            data: {
                id: bookObject.id,
                title: bookObject.title,
                year_release: parseInt(bookObject.year_release),
                price: bookObject.price,
                image: bookObject.image,
                genres: bookObject.genres,
                pages: parseInt(bookObject.pages),
                author: bookObject.author,
                amazon_link: bookObject.amazon_link,
                resume: bookObject.resume,
                updated_at: new Date(),
            },
        });
    }

    static delete(book_id: string) {
        return prisma.book.delete({
            where: {
                id: book_id,
            },
        });
    }
}
