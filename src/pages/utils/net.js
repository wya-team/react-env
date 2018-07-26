/**
 * ajax
 * @param  {[type]} url     地址
 * @param  {[type]} method  请求类型
 * @param  {[type]} body    请求的参数
 * @param  {Object} options 扩展
 *
 */
import { ajaxFn } from 'wya-fetch';
const loadingFn = (msg) => {
};
const loadedFn = () => {
};
const setCb = () => {

};
const otherCb = () => {

};
const opts = {

};
const ajax = ajaxFn(loadingFn, loadedFn, setCb, otherCb, opts);
let net = {
	ajax
};
export default net;
