/*
 * @Description: 数据校验
 * @Author: yangyb
 * @Date: 2022-01-14 10:01:43
 * @LastEditors: yangyb
 * @LastEditTime: 2022-02-18 14:13:50
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

// const arr = user.cuteGirlToSimilarArray();
// console.log('arr :>> ', arr);
