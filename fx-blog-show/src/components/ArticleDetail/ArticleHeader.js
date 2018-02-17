import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less'

export default class ArticleHeader extends PureComponent {
  
  render() {
    const { name, createTime, categories, tags, visitNum } = this.props;
    return (
      <div className={styles.header}>
        <h1 className={styles.auto} >{name}</h1>
        <span className={styles.auto} >
          <span className={styles.spanType} ><Icon type="clock-circle-o" /> {createTime} </span>
          <span className={styles.spanType} ><Icon type="folder" /> {categories[0].id ? categories.map(item => <Link to={`/categories/name/${item.name}`} key={item} >{item.name} </Link>) : "无"}</span>
          <span className={styles.spanType} ><Icon type="tags-o" /> {tags[0].id ? tags.map(item => <Link to={`/tag/name/${item.name}`} key={item} >{item.name} </Link>) : "无"}</span>
          {/* <span className={styles.spanType} ><Icon type="message" /> {discusses ? discusses.length : "无"}</span> */}
          <span className={styles.spanType} ><Icon type="eye-o" /> {visitNum}</span>
        </span>
      </div>
    )
  }
}