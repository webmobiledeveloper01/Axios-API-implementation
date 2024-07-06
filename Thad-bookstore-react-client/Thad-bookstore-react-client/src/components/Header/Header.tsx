import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { CategoryItem } from "../../types/types";
import { setNavLink } from "../../services/utils";
import { HeaderProps } from "../../types/types";



const Header = (props: HeaderProps) => {
    const { categories } = props;
    const [currentCategory, setCurrentCategory] = useState<CategoryItem>({ name: "All Categories", categoryId: 0 });
    const [isOpened, setIsOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <div className={styles.bookstore_logo}
                        onClick={() => {
                            setCurrentCategory({ name: "All Categories", categoryId: 0 });
                            navigate("/");
                        }}
                    >
                        <img src={`${import.meta.env.BASE_URL}/site-images/logo.svg`} alt="Another Bookstore Logo" width="180px" height="auto" />
                    </div>
                    <div className={styles.categoy_and_search_bar}>
                        <div className={styles.header_dropdown}>
                            <div className={styles.categories_button}
                                onMouseEnter={() => setIsOpened(true)}
                                onMouseLeave={() => setIsOpened(false)}
                            ><span>{currentCategory.name}</span>
                                {isOpened && (
                                    <div className={styles.dropdown_menu}>
                                        {categories.map((category) => (
                                            <div key={category.categoryId}
                                                onClick={() => {
                                                    setCurrentCategory({ name: category.name, categoryId: category.categoryId });
                                                    setIsOpened(false);
                                                    console.log("sdsssdafasfasf");
                                                    navigate(`/category/${setNavLink(category.name)}`);
                                                }}
                                            >
                                                {category.name}
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>

                        </div>
                        <form action="category.html">
                            <input type="text" className={styles.search_bar} placeholder="Search for books by keyword" />
                            <input type="submit" className={`${styles.button} ${styles.search_button}`} value="Search" />
                        </form>
                    </div>
                    <div className={styles.header_cart}>
                        <Link to="#" className={styles.link}><img src={`${import.meta.env.BASE_URL}/site-images/login.svg`} />Sign In <b>My Account</b></Link>
                        <Link to="#" className={styles.link}><img src={`${import.meta.env.BASE_URL}/site-images/cart.svg`} />My Cart <b>$0.00</b></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;