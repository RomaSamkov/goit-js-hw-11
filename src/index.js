import './sass/main.scss';
import { fetchImages } from './js/fetch-images';
import { renderGallery } from './js/render-gallery';

import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.btn-load-more'),
};

let query = '';
let page = 1;
let simpleLightBox;
const perPage = 40;

refs.form.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
};
function onLoadMore(){};
