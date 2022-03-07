/*
 * @Description: 数据校验
 * @Author: yangyb
 * @Date: 2022-01-14 10:01:43
 * @LastEditors: yangyb
 * @LastEditTime: 2022-03-07 17:17:29
 */
import { resolve } from 'path';
import moduleAlias from 'module-alias';
moduleAlias.addAliases({ '@': resolve(__dirname) });

import check from './data-check';

const userInfo = {
  username: 'hhhh',
  age: 18,
  cuteGirl: ['小丽', '子璇', '']
}

const user = check(userInfo);

console.log('process :>> ', process.env.APP_ENV)

// const arr = user.cuteGirlToSimilarArray();
// console.log('arr :>> ', arr);
