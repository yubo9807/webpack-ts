/*
 * @Description: 关于数字的一些工具函数
 * @Author: yangyb
 * @Date: 2022-02-16 15:31:59
 * @LastEditors: yangyb
 * @LastEditTime: 2022-02-16 15:59:41
 */
import { useless } from './decorate';

export default class {

  /**
   * 生成随机数
   * @param max 最大值
   * @param min 最小值
   */
  @useless('randomNum2')
  static randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * 生成随机数
   * @param max 最大值（取不到，只可取正整数）
   * @param min 最小值
   */
  static randomNum2(min: number, max: number) {
    return ~~(Math.random() * (max - min) + min);
  }

}
