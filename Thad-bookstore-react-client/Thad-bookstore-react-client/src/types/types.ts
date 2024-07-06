export interface CategoryItem {
    categoryId: number;
    name: string;
}

export interface BookItem {
    bookId: number;
    title: string;
    author: string;
    description: string;
    price: number;
    rating: number;
    isPublic: boolean;
    isFeatured: boolean;
    categoryId: number;
}

export interface CategoryProps{
    categories: CategoryItem[];
}

export interface BookProps{
    books: BookItem[];
}

export interface DataProps{
    categories: CategoryItem[];
    books: BookItem[];
    page: number;
    sort: string;
    limit: number;
    categoryName: string;
    onPageChange: Function;
    onLimitChange: Function;
    onSortChange: Function;
    onCategoryNameChange: Function;
}

export interface LayoutProps{
    categories: CategoryItem[];
}

export interface HeaderProps{
    categories: CategoryItem[];
}


