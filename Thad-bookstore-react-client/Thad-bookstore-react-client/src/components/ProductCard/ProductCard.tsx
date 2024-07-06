import { FC } from "react";
import styles from "./ProductCard.module.css";
import { BookItem } from "../../types/types";
import { getSlug } from "../../services/utils";
const ProductCard: FC<{ item: BookItem }> = ({ item }) => {

    return (
        <div className={styles.pro_item}>
            <div className={styles.pro_item_inner}>
                <img src={`${import.meta.env.BASE_URL}/book-images/${getSlug(item.title)}.gif`} alt={item.title} />

                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <span className={styles.price}>{item.price}</span>
                <span className={`${styles.btn} btn`}>Add to cart</span>
            </div>
        </div>
    );
};

export default ProductCard;