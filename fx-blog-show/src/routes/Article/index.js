import React, { Component }  from 'react';
import { connect } from 'dva';
import ArticleDetail from '../../components/ArticleDetail'

import { 
  like,
} from '../../services/articles';

@connect(({ article, loading }) => ({
  article,
  loading: loading.effects['article/fetchCurrentArticle'],
}))
export default class Article extends Component {

  componentDidMount() {
    const { location } = this.props;
    this.props.dispatch({
      type: 'article/fetchCurrentArticle',
      payload: location.pathname.split('/')[3],
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname) {
      this.props.dispatch({
        type: 'article/fetchCurrentArticle',
        payload: nextProps.location.pathname.split('/')[3],
      });
    }
  }

  onLike = () => {
    const { article} = this.props;
    const { currentArticle } = article;
    like(currentArticle.name)
  }

  render() {
    const { article, loading } = this.props;
    const { currentArticle } = article;
    return (
      <div>
        {
          currentArticle.name ? 
            <ArticleDetail
              loading={loading}
              onLike={this.onLike}
              data={currentArticle}
            >
            </ArticleDetail>
          :
          null
        }
      </div>
      
    )
  }
}