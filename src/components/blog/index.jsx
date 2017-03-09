import React from 'react'
import Localization from 'react-localization';
import store from '../../stores/store'

const Blog = (props) => {

    let blogTexts = new Localization(props.blog);
    blogTexts.setLanguage(store.currentLang);
    return <div className="blog" id={props.blog.eng.title}>
    <h2>{blogTexts.title}</h2>
    <p>{blogTexts.desc}</p>

    </div>;

}

export default Blog;
