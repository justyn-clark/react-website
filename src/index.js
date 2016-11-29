import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from './app/home/home';
import {About} from './app/about/about';
import {Work} from './app/work/work';
import {Gallery} from './app/gallery/gallery';
import {Blog} from './app/blog/blog';
import {Contact} from './app/contact/contact';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/gallery" component={Gallery}/>
    <Route path="/blog" component={Blog}/>
    <Route path="/contact" component={Contact}/>
  </Router>,
  document.getElementById('root')
);
