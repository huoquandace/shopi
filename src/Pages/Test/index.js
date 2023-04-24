import { useEffect, useState } from 'react'

import { Link } from "react-router-dom";

import TopMenu from '../../layouts/components/TopMenu';
import styles from './Test.module.scss'
import * as productService from '../../api/services/product'
import Slideshow from '../../components/Slideshow';

function Test() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    productService.getCategories()
      .then(data => setCategories(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <TopMenu className={styles.TopMenu}>
        {categories.map((category, index) => 
        <div className={styles.TopMenuItem}>
          <Link to="/" key={index}> {category} </Link>
        </div>)}
      </TopMenu>
      <div className={styles.Banner}>
        <Slideshow delay='5000' height='30rem' className={styles.BannerSlider}/>
        <div className={styles.BannerItem}>
          <img src='https://dummyimage.com/1980x1080/999/fff&text=lorem' alt='' />
          <img src='https://dummyimage.com/1980x1080/999/fff&text=ipsum' alt='' />
          <img src='https://dummyimage.com/1980x1080/999/fff&text=dolor' alt='' />
        </div>
      </div>
    </>
  );
}

export default Test;